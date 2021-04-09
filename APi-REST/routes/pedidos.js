const express = require('express');
const router = express.Router();

//Retorna todos os pedidos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os pedidos'
    });
});

//Insere um pedidos
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Um pedido foi criado'
    });
});

//Retorna os dados de um pedidos 
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido;
    
    res.status(200).send({
        mensagem: 'Detalhes do Pedido',
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
        mensagem: 'Pedido Excluido'
    });
});


module.exports = router;