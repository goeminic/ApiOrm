import { Request, Response } from "express";
import { Profesores } from "../models/profesoresModel";

class ProfesoresController{
    constructor(){

    }

    async consultar(req:Request, res:Response){
        try{
            const data = await Profesores.find();
            res.status(200).json(data);
        }catch(err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    async consultarDetalle (req: Request, res:Response){
        const { id } = req.params;
        try{
            const registro = await Profesores.findOneBy({id: Number(id)});
            if(!registro){
                throw new Error('Estudiante no encontrado');
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
            const registro = await Profesores.save(req.body);
            res.status(201).json(registro);
        }catch(err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    async actualizar(req: Request, res: Response){ 
        const { id } = req.params;
        try{
            const registro = await Profesores.findOneBy({id: Number(id)});
            if(!registro){
                throw new Error('Registro no encontrado');
            }else{
                await Profesores.update({id: Number(id)}, req.body);
                const registroActualizado = await Profesores.findOneBy({id: Number(id)});
                res.status(200).json(registroActualizado);
            }
        }catch(err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    async borrar(req: Request, res: Response){
        const { id } = req.params;
        try{
            const registro = await Profesores.findOneBy({id: Number(id)});
            if(!registro){
                throw new Error('Registro no encontrado');
            }else{
                await Profesores.delete({id: Number(id)});
                res.status(204);
            }
        }catch(err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }
}


export default new ProfesoresController();


