
const express = require('express');
const router = express.Router();
const path = require('path');


router.get('./views/lista.html', (req, res) => {

  res.render(path.join(__dirname, '../views/lista'));
});

module.exports = router;
