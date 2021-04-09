const express = require('express');
const router = express.Router();

//Retorna todos os pedidos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os produtos'
    });
});

//Insere um pedidos
router.post('/', (req, res, next) => {

    const produto = {
        nome: req.body.nome, 
        preco: req.body.preco
    };

    res.status(201).send({
        mensagem: 'Insira um produto',
        produtoCriado: produto
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