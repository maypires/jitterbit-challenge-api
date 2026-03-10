const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // Middleware para parsear JSON

// Conexão com o banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/jitterbit', {
}).then(() => console.log('MongoDB conectado!'))
  .catch(err => console.error('Erro ao conectar no MongoDB:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});