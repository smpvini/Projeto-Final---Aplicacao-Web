
const express = require('express');
const router = express.Router();

router.get('./views/excluir.html', (req, res) => {
  const produtoId = req.params.id;

  res.render('excluir', { produtoId });
});


router.post('/excluirProduto/:id', (req, res) => {
  const produtoId = req.params.id;

  res.send(`Produto com ID ${produtoId} excluído com sucesso!`);
});

module.exports = router;
