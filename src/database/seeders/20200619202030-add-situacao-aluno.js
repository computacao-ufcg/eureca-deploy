'use strict';

const path = require('path');
const { readFile, buildSituacao } = require('../../util/readSync');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'situacao_aluno.csv');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SituacaoAluno', buildSituacao(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SituacaoAluno', null, {});
  }
};
