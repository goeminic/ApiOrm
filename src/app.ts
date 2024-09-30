import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import estudiantesRoutes from './routes/estudiantesRoutes';
import profesoresRoutes from './routes/profesoresRoutes';
import cursosRoutes from './routes/cursosRoutes';   
import bodyParser from 'body-parser';

const app = express();


app.use(bodyParser.json({limit: "100mb"}));
app.use(bodyParser.urlencoded({limit:"50mb", extended: true}));
app.use(morgan('dev'));
app.use(cors());

app.use("/estudiantes",estudiantesRoutes);
app.use("/profesores",profesoresRoutes);
app.use("/cursos",cursosRoutes);


export default app;