import { CadastrarFilme } from "../repository/filmesRepository.js";
import { Router } from 'express';

const server = Router();

server.post('/filme/', async (req, resp) => {
    try {
        const InserirFilmes = req.body;
        const filme = await CadastrarFilme(InserirFilmes)
        if (!filme.nome)
            throw new Error('Nome é obrigatório')

        if (!filme.sinopse) 
            throw new Error('Sinopse do filme é algo obrigatório')

        if (!filme.avaliacao) 
            throw new Error('Avaliação do filme é algo obrigatório')

        if (!filme.lancamento) 
            throw new Error('Data de lançamento do filme é algo obrigatório')

        if (!filme.disponivel) 
            throw new Error('Campo disponível do filme é algo obrigatório')
            
        if (!filme.usuario) 
            throw new Error('Usuario não logado!!')

        resp.send(filme)
        
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server;