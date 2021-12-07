import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Receta } from "./Receta";

@Entity("categorias")
export class Categoria {
    
    @PrimaryGeneratedColumn()
    id_categoria:number;

    @Column({nullable: false})
    nombre_categoria:string;

    @OneToMany(() => Receta, receta => receta.id_categoria)
    recetas: Receta[];
}