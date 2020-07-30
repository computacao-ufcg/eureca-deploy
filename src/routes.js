const express = require('express');

// Importação de Controllers
const CorController = require('./controller/CorController');
const CotaController = require('./controller/CotaController');
const CursoController = require('./controller/CursoController');
const DeficienciaController = require('./controller/DeficienciaController');
const DiscenteController = require('./controller/DiscenteController');
const DiscenteDeficienciaController = require('./controller/DiscenteDeficienciaController');
const DiscenteVinculoController = require('./controller/DiscenteVinculoController');
const EscolaController = require('./controller/EscolaController');
const EstadoCivilController = require('./controller/EstadoCivilController');
const GeneroController = require('./controller/GeneroController');
const IngressoController = require('./controller/IngressoController');
const NacionalidadeController = require('./controller/NacionalidadeController');
const NaturalidadeController = require('./controller/NaturalidadeController');
const PaisController = require('./controller/PaisController');
const SituacaoDiscenteController = require('./controller/SituacaoDiscenteController');
const SituacaoVinculoController = require('./controller/SituacaoVinculoController');

const routes = express.Router();

// rotas de cadastro
routes.post('/discentes', DiscenteController.store);
routes.post('/discentes-vinculos', DiscenteVinculoController.store);
routes.post('/discentes-situacao', SituacaoDiscenteController.store);
routes.post('/ingresso', IngressoController.store);
routes.post('/cota', CotaController.store);
routes.post('/escola', EscolaController.store);
routes.post('/genero', GeneroController.store);
routes.post('/estado-civil', EstadoCivilController.store);
routes.post('/nacionalidade', NacionalidadeController.store);
routes.post('/pais', PaisController.store);
routes.post('/naturalidade', NaturalidadeController.store);
routes.post('/cor', CorController.store);
routes.post('/curso', CursoController.store);
routes.post('/situacao-vinculo', SituacaoVinculoController.store);
routes.post('/deficiencias', DeficienciaController.store);

// listar deficiência específica por id
routes.get('/deficiencias/:id_deficiencia', DeficienciaController.show);

// cadastrar relacionamento da tabelas aluno e deficiência
routes.post('/discente-deficiencias/:id_deficiencia', DiscenteDeficienciaController.store);

// rota para teste de vinculo de aluno
routes.get('/discente-vinculos/:id_curso/:id_sit_vinc', DiscenteVinculoController.show);

// listagem de aluno específico por cpf
routes.get('/discentes/:cpf', DiscenteController.show);

// remoção de um aluno específico por cpf
routes.delete('/discentes/:cpf', DiscenteController.remove);

// listagem por consulta sql
routes.get('/list-table', DiscenteController.list);

module.exports = routes;
