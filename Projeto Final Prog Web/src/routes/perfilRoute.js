
const express = require('express');
const router = express.Router();


router.get('./views/perfil.html', (req, res) => {
  const usuarioId = req.params.id;

  res.render('perfil', { usuarioId });
});

module.exports = router;
