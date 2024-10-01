import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Cursos } from "./cursosModel";

@Entity('profesores')
export class Profesores extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dni: String;

    @Column()
    nombre: String;

    @Column()
    apellido: String;

    @Column()
    email: String;

    @Column()
    profesion: String;

    @Column()
    telefono: String;

    @CreateDateColumn()
    createdAT: Date;

    @UpdateDateColumn()
    updatedAT: Date;

    @OneToMany(() => Cursos, (cursos) => cursos.profesor)
    cursos: Cursos[]
}