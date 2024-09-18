import { Request, Response } from "express";

class EstudiantesController {
    constructor() {

    }

    consultar(req: Request, res: Response) {
        try{
            res.send("Consultar Estudiante");
        }catch(err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    consultarDetalle(req: Request, res:Response){
        try{
            res.send("Consultar Detalle Estudiante");
        }catch(err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    ingresar(req: Request, res: Response){
        try{
            res.send("Ingresar un estudiante");
        }catch(err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    actualizar(req: Request, res: Response){
        try{
            res.send("Actualizar Estudiante");
        }catch (err){
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    borrar(req: Request, res: Response){
        try{
            res.send("Eliminar estudiante");
        }catch (err){
            if(err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

}


export default new EstudiantesController();