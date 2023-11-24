const express = require('express');
const Produto = require('../model/produtoModel.js');

const router = express.Router();

router.post('./views/cadProdutos.html', async (req, res) => {
  try {
    const novoProduto = new Produto(req.body);
    await novoProduto.save();
    res.redirect('/produtos');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao cadastrar o produto.');
  }
});
  module.exports = router;