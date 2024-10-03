import { Request, Response } from "express";
import { Cursos } from "../models/cursosModel";
import { error } from "console";

class CursosController {
    constructor(){

    }

    async consultar(req: Request, res: Response){
        try{
            const data = await Cursos.find();
            res.status(200).json(data);
        }catch(err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    async consultarDetalle(req: Request, res:Response){
        const {id} = req.params;
        try{
            const registro = await Cursos.findOneBy({id: Number(id)});
            if(!registro){
                throw new Error('Registro no encontrado');
            }else{
                res.status(200).json(registro);
            }
        }catch(err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    async ingresar(req: Request, res: Response){
        try{
            const registro = await Cursos.save(req.body);
            res.status(201).json(registro);
        }catch(err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    async actualizar(req: Request, res: Response){
        const {id} = req.params;
        try{
            const registro = await Cursos.findOneBy({id: Number(id)});
            if(!registro){
                throw new Error('Registro no encontrado');
            }else{
                await Cursos.update({id: Number(id)}, req.body);
                const registroActualizado = await Cursos.findOneBy({id: Number(id)});
                res.status(200).json(registroActualizado);
            }
        }catch(err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    async borrar(req: Request, res: Response){
        const {id} = req.params;
        try{
            const registro = await Cursos.findOneBy({id: Number(id)});
            if(!registro){
                throw new Error('Registro no encontrado');
            }else{
                await Cursos.delete({id: Number(id)});
                res.status(204);
            }
        }catch(err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    asociarEstudiante(req: Request, res: Response){
        try{
            res.send("Asociar Estudiante a un curso");
        }catch(err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }
}

export default new CursosController();