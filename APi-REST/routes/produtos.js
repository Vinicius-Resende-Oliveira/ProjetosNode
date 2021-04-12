const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

//Retorna todos os pedidos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os produtos'
    });
});

//Insere um pedidos
router.post('/', (req, res, next) => {

    // const produto = {
    //     nome: req.body.nome, 
    //     preco: req.body.preco
    // };

    mysql.getConnection((erro, conn) => {
        try{
            conn.query(
                'INSER INTO produtos (nome, preco) VALUE (?, ?)',
                [req.body.nome, req.body.preco],
                (error, resultado, field) => {
                    conn.release();
                    if(erro){
                        return res.status(500).send({
                            error: erro,
                            response: null
                        });
                    }

                    res.status(201).send({
                        mensagem: 'Produto inserido',
                        id_produto: resultado.insertId
                    });
                }
            );
        }
        catch(Exception){
            if(erro){
                return res.status(500).send({
                    error: erro,
                    response: null
                });
            }
        }
    });
});

//Retorna os dados de um pedidos 
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto
    
    res.status(200).send({
        mensagem: 'Detalhes do produtos',
        id: id
    });

});

//Altera um pedidos
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o PATCH dentro da rota de produtos'
    });
});

//exclui um pedidos
router.delete('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: 'Produtos Excluido'
    });
});


module.exports = router;