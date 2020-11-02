const Sequelize = require('sequelize');

// Arquivo de configuração do banco de dados
const dbConfig = require('../config/database');

// Importação dos models
const Discente = require('../models/Discente');
const SituacaoDiscente = require('../models/SituacaoDiscente');
const DiscenteVinculo = require('../models/DiscenteVinculo');
const Ingresso = require('../models/Ingresso');
const Cota = require('../models/Cota');
const Escola = require('../models/Escola');
const Genero = require('../models/Genero');
const EstadoCivil = require('../models/EstadoCivil');
const Nacionalidade = require('../models/Nacionalidade');
const Pais = require('../models/Pais');
const Naturalidade = require('../models/Naturalidade');
const Cor = require('../models/Cor');
const Curso = require('../models/Curso');
const SituacaoVinculo = require('../models/SituacaoVinculo');
const Deficiencia = require('../models/Deficiencia');
const DiscenteDeficiencia = require('../models/DiscenteDeficiencia');
const Disciplina = require('../models/Disciplina');
const SituacaoDisciplina = require('../models/SituacaoDisciplina');
const Professor = require('../models/Professor');
const Horario = require('../models/Horario');
const Turma = require('../models/Turma');
const TipoDisciplina = require('../models/TipoDisciplina');
const UnidadeAcademica = require('../models/UnidadeAcademica');
const Curriculo = require('../models/Curriculo');

// Intância da conexão com o postgres através do sequelize
const connection = new Sequelize(dbConfig);

// Conexão dos models a conexão do bd
Discente.init(connection);
SituacaoDiscente.init(connection);
DiscenteVinculo.init(connection);
Ingresso.init(connection);
Cota.init(connection);
Escola.init(connection);
Genero.init(connection);
EstadoCivil.init(connection);
Nacionalidade.init(connection);
Pais.init(connection);
Naturalidade.init(connection);
Cor.init(connection);
Curso.init(connection);
SituacaoVinculo.init(connection);
Deficiencia.init(connection);
DiscenteDeficiencia.init(connection);
Disciplina.init(connection);
SituacaoDisciplina.init(connection);
Professor.init(connection);
Horario.init(connection);
Turma.init(connection);
TipoDisciplina.init(connection);
UnidadeAcademica.init(connection);
Curriculo.init(connection);

// definição das associações
DiscenteVinculo.associate(connection.models);
Discente.associate(connection.models);
Deficiencia.associate(connection.models);

module.exports = connection;