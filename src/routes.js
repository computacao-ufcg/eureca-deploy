const express = require('express');

// Importação de Controllers
const GeneralController = require('./controller/GeneralController');

const routes = express.Router();

// listagem por consulta sql
routes.get('/tables', GeneralController.list);

module.exports = routes;
