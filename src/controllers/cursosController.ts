import { Request, Response } from "express";
import { Cursos } from "../models/cursosModel";
import { error } from "console";
import { Profesores } from "../models/profesoresModel";
import { FindRelationsNotFoundError } from "typeorm";
import { Estudiantes } from "../models/estudiantesModel";

class CursosController {
    constructor(){

    }

    async consultar(req: Request, res: Response){
        try{
            const data = await Cursos.find({relations: { profesor:true, estudiantes:true }});
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
            const registro = await Cursos.findOne({where: { id: Number(id) }, relations: {profesor:true, estudiantes:true} });  
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
            const {profesor} = req.body;
            const profesorReg = await Profesores.findOneBy({id: Number(profesor)});
            if(!profesorReg){
                throw new Error('Profesor no encontrado');
            }else{
                const registro = await Cursos.save(req.body);
                res.status(201).json(registro);
            }
        }catch(err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    async actualizar(req: Request, res: Response){
        const {id} = req.params;
        try{
            const {profesor} = req.body;

            const profesorReg = await Profesores.findOneBy({id: Number(profesor)});
            if(!profesorReg){
                throw new Error ('Profesor no encontrado');
            }else{
                const registro = await Cursos.findOneBy({id: Number(id)});
                if(!registro){
                    throw new Error('Curso no encontrado');
                }else{
                    await Cursos.update({id: Number(id)}, req.body);
                    const registroActualizado = await Cursos.findOne({where: {id: Number(id)}, relations: {profesor:true, estudiantes:true} });
                    res.status(200).json(registroActualizado);
                }   
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

    async asociarEstudiante (req:Request, res:Response){
        const {id} = req.params;
        try{
            const {estudiante_id, curso_id} = req.body;
            const estudiante = await Estudiantes.findOneBy({id: Number(estudiante_id)});
            const curso = await Cursos.findOneBy({id: Number(curso_id)});   
            if(!estudiante){
                throw new Error('Estudiante no encontrado');
            }
            if(!curso){
                throw new Error('Curso no encontrado');
            }

            curso.estudiantes = curso.estudiantes || [];
            curso.estudiantes.push(estudiante);
            const registro = await Cursos.save(curso);
            res.status(200).json(registro);
        }catch(err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }
}

export default new CursosController();