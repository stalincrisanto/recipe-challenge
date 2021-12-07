"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
const usuarios_routes_1 = __importDefault(require("./routes/usuarios.routes"));
const categorias_routes_1 = __importDefault(require("./routes/categorias.routes"));
const recetas_routes_1 = __importDefault(require("./routes/recetas.routes"));
const app = (0, express_1.default)();
(0, typeorm_1.createConnection)();
//middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//rutas
app.use(usuarios_routes_1.default);
app.use(categorias_routes_1.default);
app.use(recetas_routes_1.default);
app.listen(3000, () => {
    console.log(`Servidor corriendo en puerto 3000!!!`);
});
//# sourceMappingURL=app.js.map