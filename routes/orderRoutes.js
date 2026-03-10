const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Rota para criar um novo pedido
router.post('/order', async (req, res) => {
  try {
    const { numeroPedido, valorTotal, dataCriacao, items } = req.body;

    const transformedData = {
      orderId: numeroPedido,
      value: valorTotal,
      creationDate: dataCriacao,
      items: items.map(item => ({
        productId: parseInt(item.idItem),
        quantity: item.quantidadeItem,
        price: item.valorItem
      }))
    };

    const newOrder = new Order(transformedData);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar pedido: " + error.message }); 
  }
});

// Rota para buscar um pedido por ID
router.get('/order/:orderId', async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: req.params.orderId });
    if (!order) return res.status(404).json({ message: "Pedido não encontrado" });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 