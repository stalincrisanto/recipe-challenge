import { Router } from "express";
import { getUsuarios, createUsuario, getUsuario, updateUsuario, deleteUsuario } from '../controllers/usuarios.controllers';

const routerUsuarios = Router();

routerUsuarios.get('/usuarios', getUsuarios);
routerUsuarios.get('/usuarios/:id', getUsuario);
routerUsuarios.post('/usuarios', createUsuario);
routerUsuarios.put('/usuarios/:id', updateUsuario);
routerUsuarios.delete('/usuarios/:id', deleteUsuario);

export default routerUsuarios;