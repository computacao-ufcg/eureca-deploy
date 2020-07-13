'use strict';

const path = require('path');
const { readFile, buildAlunos } = require('../../util/readSync');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'aluno-teste.csv');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Aluno', buildAlunos(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Aluno', null, {});
  }
};
