import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import estudiantesRoutes from './routes/estudiantesRoutes';
import profesoresRoutes from './routes/profesoresRoutes';
import cursosRoutes from './routes/cursosRoutes';

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use("/estudiantes",estudiantesRoutes);
app.use("/profesores",profesoresRoutes);
app.use("/cursos",cursosRoutes);

//quede en 1:59

app.listen(6505,()=>{
    console.log("Servidor Activo");
});

