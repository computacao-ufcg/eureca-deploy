'use strict';

const path = require('path');
const { readFile, buildDescricao } = require('../../database/populateDB');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'situacao_aluno.csv');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SituacaoDiscente', buildDescricao(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SituacaoDiscente', null, {});
  }
};
