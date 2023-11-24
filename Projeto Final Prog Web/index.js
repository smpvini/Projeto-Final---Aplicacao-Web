
const express = require('express');
const path = require('path');
const app = express();
const connectDatabase = require("./db.js")

connectDatabase()


app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const cadastroRoute = require('./src/routes/cadastroRoute.js');
const loginRoute = require('./src/routes/loginRoute.js');
const perfilRoute = require('./src/routes/perfilRoute.js');
const listaRoute = require('./src/routes/listaRoute.js');
const CadprodutosRoute = require('./src/routes/CadprodutosRoute.js');
const excluirRoute = require('./src/routes/excluirRoute.js');
const editarRoute = require('./src/routes/editarRoute.js');

app.use('/cadastro', cadastroRoute);
app.use('/login', loginRoute);
app.use('/perfil', perfilRoute); 
app.use('/listarProdutos', listaRoute);
app.use('/cadastroProdutos', CadprodutosRoute);
app.use('/excluirProdutos', excluirRoute);
app.use('/editarProdutos', editarRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
