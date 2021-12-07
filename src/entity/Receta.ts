import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Categoria } from './Categoria';
import { Usuario } from "./Usuario";

@Entity("recetas")
export class Receta {
    
    @PrimaryGeneratedColumn()
    id_receta:number;

    @Column()
    nombre_receta:string;

    @Column()
    descripcion_receta:string;

    @Column()
    ingredientes_receta:string;

    @ManyToOne(() => Usuario, usuario => usuario.recetas)
    @JoinColumn({name:'id_usuario'})
    id_usuario: Usuario;

    @ManyToOne(() => Categoria, categoria => categoria.recetas)
    @JoinColumn({name:'id_categoria'})
    id_categoria: Categoria;
}