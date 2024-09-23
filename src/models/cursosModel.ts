import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Cursos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: String;

    @Column()
    descripcion: String;

    @Column()
    id_profesor:number;
}