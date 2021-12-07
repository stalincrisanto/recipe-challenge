"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controllers_1 = require("../controllers/usuarios.controllers");
const routerUsuarios = (0, express_1.Router)();
routerUsuarios.get('/usuarios', usuarios_controllers_1.getUsuarios);
routerUsuarios.get('/usuarios/:id', usuarios_controllers_1.getUsuario);
routerUsuarios.post('/usuarios', usuarios_controllers_1.createUsuario);
routerUsuarios.put('/usuarios/:id', usuarios_controllers_1.updateUsuario);
routerUsuarios.delete('/usuarios/:id', usuarios_controllers_1.deleteUsuario);
exports.default = routerUsuarios;
//# sourceMappingURL=usuarios.routes.js.map