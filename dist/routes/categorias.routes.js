"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categorias_controllers_1 = require("../controllers/categorias.controllers");
const routerCategorias = (0, express_1.Router)();
routerCategorias.get('/categorias', categorias_controllers_1.getCategorias);
routerCategorias.get('/categorias/:id', categorias_controllers_1.getCategoria);
routerCategorias.post('/categorias', categorias_controllers_1.createCategoria);
routerCategorias.put('/categorias/:id', categorias_controllers_1.updateCategoria);
routerCategorias.delete('/categorias/:id', categorias_controllers_1.deleteCategoria);
exports.default = routerCategorias;
//# sourceMappingURL=categorias.routes.js.map