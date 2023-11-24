const mongoose = require('mongoose');

const CadprodutosSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
});

const Produto = mongoose.model('Cadprodutos', CadprodutosSchema);

module.exports = Produto;
