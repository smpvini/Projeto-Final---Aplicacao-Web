
const express = require('express');
const router = express.Router();


router.get('./views/cadastro.html', (req, res) => {
  res.render('cadastro');
});

router.post('/cadastrarUsuario', (req, res) => {

  res.send('Usuário cadastrado com sucesso!');
});

module.exports = router;
