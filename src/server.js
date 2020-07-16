require('dotenv/config');
const express = require('express');
const cors = require('cors');

// arquivo de rotas da aplicação
const routes = require('./routes');

// importação do estado do banco de dados
require('./database');

// inicialização do servidor express
const app = express();

// uso do módulo cors para conexão com o frontend
app.use(cors());

// habilitando a aceitação de objetos json no servidor
app.use(express.json());

// adicionando as rotas ao servidor
app.use(routes);

// deixa o servidor ouvindo uma determinada porta
app.listen(process.env.PORT);
