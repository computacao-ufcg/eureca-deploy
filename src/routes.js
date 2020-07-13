const express = require('express');

// Importação de Controllers
const AlunoController = require('./controller/AlunoController');
const AlunoVinculoController = require('./controller/AlunoVinculoController');
const SituacaoAlunoController = require('./controller/SituacaoAlunoController');
const IngressoController = require('./controller/IngressoController');
const CotaController = require('./controller/CotaController');
const EscolaController = require('./controller/EscolaController');
const GeneroController = require('./controller/GeneroController');
const EstadoCivilController = require('./controller/EstadoCivilController');
const NacionalidadeController = require('./controller/NacionalidadeController');
const PaisOrigemController = require('./controller/PaisOrigemController');
const MunicipioController = require('./controller/MunicipioController');
const RacaController = require('./controller/RacaController');
const CursoController = require('./controller/CursoController');
const SituacaoVinculoController = require('./controller/SituacaoVinculoController');
const DeficienciaController = require('./controller/DeficienciaController');
const AlunoDeficienciaController = require('./controller/AlunoDeficienciaController');

const routes = express.Router();

routes.post('/alunos', AlunoController.store);
routes.post('/alunos-vinculos', AlunoVinculoController.store);
routes.post('/alunos-situacao', SituacaoAlunoController.store);
routes.post('/ingresso', IngressoController.store);
routes.post('/cota', CotaController.store);
routes.post('/escola', EscolaController.store);
routes.post('/genero', GeneroController.store);
routes.post('/estado-civil', EstadoCivilController.store);
routes.post('/nacionalidade', NacionalidadeController.store);
routes.post('/pais-origem', PaisOrigemController.store);
routes.post('/municipio', MunicipioController.store);
routes.post('/raca', RacaController.store);
routes.post('/curso', CursoController.store);
routes.post('/situacao-vinculo', SituacaoVinculoController.store);

// cadastro de deficiência
routes.post('/deficiencias', DeficienciaController.store);

// listar deficiência específica por id
routes.get('/deficiencias/:id_deficiencia', DeficienciaController.show);

// cadastrar relacionamento da tabelas aluno e deficiência
routes.post('/aluno-deficiencias/:id_deficiencia', AlunoDeficienciaController.store);

// rota para teste de vinculo de aluno
routes.get('/alunos-vinculos/:id_curso/:id_sit_vinc', AlunoVinculoController.show);

// listagem de aluno específico por cpf
routes.get('/alunos/:cpf', AlunoController.show);

// remoção de um aluno específico por cpf
routes.delete('/alunos/:cpf', AlunoController.remove);

// listagem por consulta sql
routes.get('/alunos', AlunoController.list);

module.exports = routes;
