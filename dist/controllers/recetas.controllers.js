"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReceta = exports.updateReceta = exports.createReceta = exports.getReceta = exports.getRecetas = void 0;
const typeorm_1 = require("typeorm");
const Receta_1 = require("../entity/Receta");
const getRecetas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recetasData = yield (0, typeorm_1.getRepository)(Receta_1.Receta).find({ relations: ["id_usuario", "id_categoria"] });
        return res.json(recetasData);
    }
    catch (error) {
        console.log(error);
        return res.json({ msg: 'Ha ocurrido un error' });
    }
});
exports.getRecetas = getRecetas;
const getReceta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const recetaData = yield (0, typeorm_1.getRepository)(Receta_1.Receta).findOne(id, { relations: ["id_usuario", "id_categoria"] });
    if (recetaData != null) {
        return res.json(recetaData);
    }
    else {
        return res.json({ msg: `La receta con id: ${id}, no existe` });
    }
});
exports.getReceta = getReceta;
const createReceta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevaReceta = (0, typeorm_1.getRepository)(Receta_1.Receta).create(req.body);
    const results = yield (0, typeorm_1.getRepository)(Receta_1.Receta).save(nuevaReceta);
    return res.json(nuevaReceta);
});
exports.createReceta = createReceta;
const updateReceta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const recetaData = yield (0, typeorm_1.getRepository)(Receta_1.Receta).findOne(id);
    if (recetaData != null) {
        (0, typeorm_1.getRepository)(Receta_1.Receta).merge(recetaData, req.body);
        const results = yield (0, typeorm_1.getRepository)(Receta_1.Receta).save(recetaData);
        return res.json(results);
    }
    else {
        return res.json({ msg: `La receta con id: ${id}, no existe` });
    }
});
exports.updateReceta = updateReceta;
const deleteReceta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const recetaData = yield (0, typeorm_1.getRepository)(Receta_1.Receta).findOne(id);
    if (recetaData != null) {
        const results = yield (0, typeorm_1.getRepository)(Receta_1.Receta).delete(id);
        if (results.affected == 1) {
            return res.json({ msg: `La categoria con id: ${id} ha sido eliminada` });
        }
    }
    else {
        return res.json({ msg: `La receta con id: ${id}, no existe` });
    }
});
exports.deleteReceta = deleteReceta;
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
//# sourceMappingURL=recetas.controllers.js.map