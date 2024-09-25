import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Profesores } from "./profesoresModel";


@Entity('cursos')
export class Cursos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: String;

    @Column('text')
    descripcion: String;

    @CreateDateColumn()
    createdAT: Date;

    @UpdateDateColumn()
    udatedAT: Date;

    @ManyToOne(() => Profesores, (Profesores)=>Profesores.cursos)
    @JoinColumn({name:'profesor_id'})
    profesor: Profesores
}