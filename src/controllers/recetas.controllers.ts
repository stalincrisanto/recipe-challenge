import { Request, Response } from "express";
import { createQueryBuilder, getRepository } from "typeorm";
import { Receta } from "../entity/Receta";

export const getRecetas = async (req:Request, res:Response) => {
    try {
        const recetasData = await getRepository(Receta).find({ relations: ["id_usuario","id_categoria"] });
        return res.json(recetasData);
    } catch (error) {
        console.log(error);
        return res.json({msg:'Ha ocurrido un error'});
    }
}

export const getReceta = async (req:Request, res:Response) => {
    const id = req.params.id;
    const recetaData = await getRepository(Receta).findOne(id,{ relations: ["id_usuario","id_categoria"] });
    if(recetaData != null){
        return res.json(recetaData);
    } else {
        return res.json({msg:`La receta con id: ${id}, no existe`});
    }
}

export const createReceta = async (req:Request, res:Response) => {
    const nuevaReceta = getRepository(Receta).create(req.body);
    const results = await getRepository(Receta).save(nuevaReceta);
    return res.json(nuevaReceta);
}

export const updateReceta = async (req:Request, res:Response) => {
    const id = req.params.id;
    const recetaData = await getRepository(Receta).findOne(id);
    if(recetaData != null){
        getRepository(Receta).merge(recetaData,req.body);
        const results = await getRepository(Receta).save(recetaData);
        return res.json(results);
     } else {
         return res.json({msg:`La receta con id: ${id}, no existe`});
     }
 }

export const deleteReceta = async (req:Request, res:Response) => {
    const id = req.params.id;
    const recetaData = await getRepository(Receta).findOne(id);
    if(recetaData != null){
        const results = await getRepository(Receta).delete(id);
        if(results.affected == 1){
            return res.json({msg:`La categoria con id: ${id} ha sido eliminada`});
        }
    } else {
        return res.json({msg:`La receta con id: ${id}, no existe`});
    }
}

/**
export const getRecetaPorCategoria = async (req:Request, res:Response) => {
    const categoria = req.params.id;
    const recetaData = await createQueryBuilder("recetas")
                             .select(['categorias.id_categoria' ,'categorias.nombre_categoria', 'recetas.id_receta', 
                                      'recetas.nombre_receta', 'recetas.descripcion_receta', 'recetas.ingredientes_receta'])
                                      .innerJoin('categorias','c','c.id_categoria = recetas.id_categoria')
                                      .where("LOWER(categorias.nombre_categoria) LIKE LOWER('%pos%')")
                                      console.log(recetaData);
                                      if(recetaData != null){
                                          return res.json(recetaData);
                                        } else {
                                            return res.json({msg:`La receta con categoria: ${categoria}, no existe`});
                                        }
                                    }
                                    **/
                                   
                                   /* 
                                   
                                   
                                    
                                    
*/
