import { Router } from "express";
import { getCategoria, getCategorias, createCategoria, updateCategoria, deleteCategoria } from '../controllers/categorias.controllers';

const routerCategorias = Router();

routerCategorias.get('/categorias', getCategorias);
routerCategorias.get('/categorias/:id', getCategoria);
routerCategorias.post('/categorias', createCategoria);
routerCategorias.put('/categorias/:id', updateCategoria);
routerCategorias.delete('/categorias/:id', deleteCategoria);

export default routerCategorias;