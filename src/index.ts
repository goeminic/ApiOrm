import app from './app';
import { AppDataSource } from './db/conexion';

async function main() {
    await AppDataSource.initialize();
    app.listen(6505,()=>{
        console.log("Servidor Activo");
    });
}

//quede en 2:08

main();



