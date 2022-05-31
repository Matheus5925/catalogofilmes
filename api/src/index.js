import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import usuarioController from  './controller/usuarioController.js'
import filmeController from './controller/filmesController.js'

const server = express();
server.use(cors());
server.use(express.json());

server.use(filmeController);
server.use(usuarioController)

server.listen(process.env.PORT, () => console.log(`API rodando na port ${process.env.PORT}`));