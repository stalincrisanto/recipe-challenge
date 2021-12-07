import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Categoria } from "../entity/Categoria";

export const getCategorias = async (req:Request, res:Response) => {
    try {
        const categoriasData = await getRepository(Categoria).find();
        return res.json(categoriasData);
    } catch (error) {
        console.log(error);
        return res.json({msg:'Ha ocurrido un error'});
    }
}

export const getCategoria = async (req:Request, res:Response) => {
    const id = req.params.id;
    const usuarioCategoria = await getRepository(Categoria).findOne(id);
    if(usuarioCategoria != null){
        return res.json(usuarioCategoria);
    } else {
        return res.json({msg:`La categoria don id: ${id}, no existe`});
    }
}

export const createCategoria = async (req:Request, res:Response) => {
    const nuevaCategoria = getRepository(Categoria).create(req.body);
    const results = await getRepository(Categoria).save(nuevaCategoria);
    return res.json(nuevaCategoria);
}

export const updateCategoria = async (req:Request, res:Response) => {
    const id = req.params.id;
    const categoriaData = await getRepository(Categoria).findOne(id);
    if(categoriaData != null){
        getRepository(Categoria).merge(categoriaData,req.body);
        const results = await getRepository(Categoria).save(categoriaData);
        return res.json(results);
    } else {
        return res.json({msg:`La categoria don id: ${id}, no existe`});
    }
}

export const deleteCategoria = async (req:Request, res:Response) => {
    const id = req.params.id;
    const categoriaData = await getRepository(Categoria).findOne(id);
    if(categoriaData != null){
        const results = await getRepository(Categoria).delete(id);
        if(results.affected == 1){
            return res.json({msg:`La categoria con id: ${id} ha sido eliminada`});
        }
    } else {
        return res.json({msg:`La categoria don id: ${id}, no existe`});
    }
}