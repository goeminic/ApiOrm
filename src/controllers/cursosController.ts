import { Request, Response } from "express";

class CursosController {
    constructor(){

    }

    consultar(req: Request, res: Response){
        try{
            res.send("Consultar");
        }catch(err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    consultarDetalle(req: Request, res:Response){
        try{
            res.send("Consultar detalle de curso");
        }catch(err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    ingresar(req: Request, res: Response){
        try{
            res.send("Ingresar Curso");
        }catch(err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    actualizar(req: Request, res: Response){
        try{
            res.send("actualizar curso");
        }catch(err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    borrar(req: Request, res: Response){
        try{
            res.send("Eliminar Curso");
        }catch(err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }
}

export default new CursosController();