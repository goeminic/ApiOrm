import app from './app';
import { AppDataSource } from './db/conexion';

async function main() {
    try{
        await AppDataSource.initialize();
        console.log("Base de Datos Conectada");
        app.listen(6505,()=>{
            console.log("Servidor Activo");
        });
    }catch(err){
        if (err instanceof Error){
            console.log(err.message);
        }
    }    
}

//quede en 2:40 1-Se completo implementacion de estudiantes Controller 2- falta implementar profesores y cursos controller y testing

main();



