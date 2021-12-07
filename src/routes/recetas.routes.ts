import { Router } from "express";
import { getRecetas, getReceta, createReceta, updateReceta, deleteReceta } from '../controllers/recetas.controllers';

const routerRecetas = Router();

routerRecetas.get('/recetas', getRecetas);
routerRecetas.get('/recetas/:id', getReceta);
routerRecetas.post('/recetas', createReceta);
routerRecetas.put('/recetas/:id', updateReceta);
routerRecetas.delete('/recetas/:id', deleteReceta);

export default routerRecetas;