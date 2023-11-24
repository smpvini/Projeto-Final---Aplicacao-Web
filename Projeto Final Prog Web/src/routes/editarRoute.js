
const express = require('express');
const router = express.Router();

router.get('./views/editar.html', (req, res) => {
  const produtoId = req.params.id;

  res.render('editar', { produtoId });
});

router.post('/atualizarProduto/:id', (req, res) => {
  const produtoId = req.params.id;

  res.send(`Produto com ID ${produtoId} atualizado com sucesso!`);
});

module.exports = router;
