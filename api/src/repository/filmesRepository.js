import { con } from './connection.js';

export async function CadastrarFilme(filme) {
    const comandoCadastro = 
                `INSERT INTO tb_filme (id_usuario, nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
                        VALUES (?, ?, ?, ?, ?, ?);`
    
    const [resposta] = await (await con).query(comandoCadastro,[filme.usuario, filme.nome, filme.sinopse,filme.avaliacao, filme.lancamento,filme.disponivel]);
    filme.id = resposta.insertId;
    
    return filme;

}