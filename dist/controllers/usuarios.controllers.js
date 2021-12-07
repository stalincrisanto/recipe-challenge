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
exports.deleteUsuario = exports.updateUsuario = exports.createUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const typeorm_1 = require("typeorm");
const Usuario_1 = require("../entity/Usuario");
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuariosData = yield (0, typeorm_1.getRepository)(Usuario_1.Usuario).find();
        return res.json(usuariosData);
    }
    catch (error) {
        console.log(error);
        return res.json({ msg: 'Ha ocurrido un error' });
    }
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const usuarioData = yield (0, typeorm_1.getRepository)(Usuario_1.Usuario).findOne(id);
    if (usuarioData != null) {
        return res.json(usuarioData);
    }
    else {
        return res.json({ msg: `El usuario don id: ${id}, no existe` });
    }
});
exports.getUsuario = getUsuario;
const createUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoUsuario = (0, typeorm_1.getRepository)(Usuario_1.Usuario).create(req.body);
    const results = yield (0, typeorm_1.getRepository)(Usuario_1.Usuario).save(nuevoUsuario);
    return res.json(nuevoUsuario);
});
exports.createUsuario = createUsuario;
const updateUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const usuarioData = yield (0, typeorm_1.getRepository)(Usuario_1.Usuario).findOne(id);
    if (usuarioData != null) {
        (0, typeorm_1.getRepository)(Usuario_1.Usuario).merge(usuarioData, req.body);
        const results = yield (0, typeorm_1.getRepository)(Usuario_1.Usuario).save(usuarioData);
        return res.json(results);
    }
    else {
        return res.json({ msg: `El usuario don id: ${id}, no existe` });
    }
});
exports.updateUsuario = updateUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const usuarioData = yield (0, typeorm_1.getRepository)(Usuario_1.Usuario).findOne(id);
    if (usuarioData != null) {
        const results = yield (0, typeorm_1.getRepository)(Usuario_1.Usuario).delete(id);
        return res.json(results);
    }
    else {
        return res.json({ msg: `El usuario don id: ${id}, no existe` });
    }
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.controllers.js.map