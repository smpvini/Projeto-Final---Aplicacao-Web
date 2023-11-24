
const express = require('express');
const router = express.Router();

router.get('./views/login.html', (req, res) => {
  res.render('login');
});

router.post('/autenticarUsuario', (req, res) => {

  res.send('Usuário autenticado com sucesso!');
});

module.exports = router;
