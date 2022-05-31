import { Login } from '../repository/usuarioRepository.js'
import { Router } from 'express';

const server = Router();

server.post('/usuario/login', async (req, resp) =>{
    try {
        const {email, senha} = req.body;
        const resposta = await Login(email, senha);
        resp.send(resposta)

    } catch (err) {
        resp.status(400).send({
            err: 'Ocorreu um erro'
        })
    }

})