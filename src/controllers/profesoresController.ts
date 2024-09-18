import { Request, Response } from "express";

class ProfesoresController{
    constructor(){

    }

    consultar(req:Request, res:Response){
        try{
            res.send("Consultar Profesor");
        }catch(err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    consultarDetalle (req: Request, res:Response){
        try{
            res.send("Consultar detalle Profesor");
        }catch(err){    
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    ingresar(req: Request, res: Response){
        try{
            res.send("Ingresar Profesor");
        }catch(err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    actualizar(req: Request, res: Response){
        try{
            res.send("Actualizar Profesor");
        }catch(err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    borrar(req: Request, res: Response){
        try{
            res.send("Eliminar Profesor");
        }catch(err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }
}


export default new ProfesoresController();


