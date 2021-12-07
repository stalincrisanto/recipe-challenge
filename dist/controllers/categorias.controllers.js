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
exports.deleteCategoria = exports.updateCategoria = exports.createCategoria = exports.getCategoria = exports.getCategorias = void 0;
const typeorm_1 = require("typeorm");
const Categoria_1 = require("../entity/Categoria");
const getCategorias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoriasData = yield (0, typeorm_1.getRepository)(Categoria_1.Categoria).find();
        return res.json(categoriasData);
    }
    catch (error) {
        console.log(error);
        return res.json({ msg: 'Ha ocurrido un error' });
    }
});
exports.getCategorias = getCategorias;
const getCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const usuarioCategoria = yield (0, typeorm_1.getRepository)(Categoria_1.Categoria).findOne(id);
    if (usuarioCategoria != null) {
        return res.json(usuarioCategoria);
    }
    else {
        return res.json({ msg: `La categoria don id: ${id}, no existe` });
    }
});
exports.getCategoria = getCategoria;
const createCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevaCategoria = (0, typeorm_1.getRepository)(Categoria_1.Categoria).create(req.body);
    const results = yield (0, typeorm_1.getRepository)(Categoria_1.Categoria).save(nuevaCategoria);
    return res.json(nuevaCategoria);
});
exports.createCategoria = createCategoria;
const updateCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const categoriaData = yield (0, typeorm_1.getRepository)(Categoria_1.Categoria).findOne(id);
    if (categoriaData != null) {
        (0, typeorm_1.getRepository)(Categoria_1.Categoria).merge(categoriaData, req.body);
        const results = yield (0, typeorm_1.getRepository)(Categoria_1.Categoria).save(categoriaData);
        return res.json(results);
    }
    else {
        return res.json({ msg: `La categoria don id: ${id}, no existe` });
    }
});
exports.updateCategoria = updateCategoria;
const deleteCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const categoriaData = yield (0, typeorm_1.getRepository)(Categoria_1.Categoria).findOne(id);
    if (categoriaData != null) {
        const results = yield (0, typeorm_1.getRepository)(Categoria_1.Categoria).delete(id);
        if (results.affected == 1) {
            return res.json({ msg: `La categoria con id: ${id} ha sido eliminada` });
        }
    }
    else {
        return res.json({ msg: `La categoria don id: ${id}, no existe` });
    }
});
exports.deleteCategoria = deleteCategoria;
//# sourceMappingURL=categorias.controllers.js.map