const mongoose = require('mongoose'); // Importa o Mongoose para definir o esquema do banco de dados

// Define o esquema para os itens do pedido
const ItemSchema = new mongoose.Schema({ 
  productId: { type: Number, required: true }, 
  quantity: { type: Number, required: true },  
  price: { type: Number, required: true }      
});

// Define o esquema para os pedidos
const OrderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  value: { type: Number, required: true },                
  creationDate: { type: Date, default: Date.now },   
  items: [ItemSchema]
});

module.exports = mongoose.model('Order', OrderSchema); // Exporta o modelo de pedido para ser usado em outras partes da aplicação