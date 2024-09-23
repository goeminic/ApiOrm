import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Estudiantes {
    
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
}