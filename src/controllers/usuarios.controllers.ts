import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Usuario } from "../entity/Usuario";

export const getUsuarios = async (req:Request, res:Response) => {
    try {
        const usuariosData = await getRepository(Usuario).find();
        return res.json(usuariosData);
    } catch (error) {
        console.log(error);
        return res.json({msg:'Ha ocurrido un error'});
    }
}

export const getUsuario = async (req:Request, res:Response) => {
    const id = req.params.id;
    const usuarioData = await getRepository(Usuario).findOne(id);
    if(usuarioData != null){
        return res.json(usuarioData);
    } else {
        return res.json({msg:`El usuario don id: ${id}, no existe`});
    }
}

export const createUsuario = async (req:Request, res:Response) => {
    const nuevoUsuario = getRepository(Usuario).create(req.body);
    const results = await getRepository(Usuario).save(nuevoUsuario);
    return res.json(nuevoUsuario);
}

export const updateUsuario = async (req:Request, res:Response) => {
    const id = req.params.id;
    const usuarioData = await getRepository(Usuario).findOne(id);
    if(usuarioData != null){
        getRepository(Usuario).merge(usuarioData,req.body);
        const results = await getRepository(Usuario).save(usuarioData);
        return res.json(results);
    } else {
        return res.json({msg:`El usuario don id: ${id}, no existe`});
    }
}

export const deleteUsuario = async (req:Request, res:Response) => {
    const id = req.params.id;
    const usuarioData = await getRepository(Usuario).findOne(id);
    if(usuarioData != null){
        const results = await getRepository(Usuario).delete(id);
        return res.json(results);
    } else {
        return res.json({msg:`El usuario don id: ${id}, no existe`});
    }
}