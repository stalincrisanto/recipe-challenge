import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import {createConnection} from "typeorm";
import routerUsuarios from './routes/usuarios.routes';
import routerCategorias from './routes/categorias.routes';
import routerRecetas from './routes/recetas.routes';

const app = express();
createConnection();

//middlewares
app.use(cors());
app.use(express.json());

//rutas
app.use(routerUsuarios);
app.use(routerCategorias);
app.use(routerRecetas);

app.listen(3000, ()=> {
    console.log(`Servidor corriendo en puerto 3000!!!`);
})