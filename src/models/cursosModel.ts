import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Profesores } from "./profesoresModel";
import { Estudiantes } from "./estudiantesModel";


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

    @ManyToMany(()=>Estudiantes)
    @JoinTable({
        name:'cursos_estudiantes',
        joinColumn: {name:'curso_id'},
        inverseJoinColumn: {name:'estudiante_id'}
    })
    estudiantes: Estudiantes[];
}