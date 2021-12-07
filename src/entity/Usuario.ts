import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Receta } from "./Receta";

@Entity("usuarios")
export class Usuario {
    
    @PrimaryGeneratedColumn()
    id_usuario:number;

    @Column({nullable: false})
    nombre_usuario:string;

    @Column()
    email_usuario:string;

    @Column()
    password_usuario:string;

    @OneToMany(() => Receta, receta => receta.id_usuario)
    recetas: Receta[];
}