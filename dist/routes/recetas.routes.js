"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recetas_controllers_1 = require("../controllers/recetas.controllers");
const routerRecetas = (0, express_1.Router)();
routerRecetas.get('/recetas', recetas_controllers_1.getRecetas);
routerRecetas.get('/recetas/:id', recetas_controllers_1.getReceta);
routerRecetas.post('/recetas', recetas_controllers_1.createReceta);
routerRecetas.put('/recetas/:id', recetas_controllers_1.updateReceta);
routerRecetas.delete('/recetas/:id', recetas_controllers_1.deleteReceta);
exports.default = routerRecetas;
//# sourceMappingURL=recetas.routes.js.map