import { DataSource } from "typeorm";
import { Estudiantes } from "../models/estudiantesModel";
import { Profesores } from "../models/profesoresModel";
import { Cursos } from "../models/cursosModel";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "",
    database: "cursos",
    logging: true,
    entities: [Estudiantes,Profesores,Cursos],
    subscribers: [],
    migrations: [],
    synchronize: false
});