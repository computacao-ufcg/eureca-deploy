'use strict';

const path = require('path');
const { readFile, buildAlunoDeficiencias } = require('../../database/populateDB');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'aluno_deficiencias.csv');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AlunoDeficiencia', buildAlunoDeficiencias(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AlunoDeficiencia', null, {});
  }
};
