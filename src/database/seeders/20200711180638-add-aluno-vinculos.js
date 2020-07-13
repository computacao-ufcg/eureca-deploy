'use strict';

const path = require('path');
const { readFile, buildAlunoVinculos } = require('../../util/readSync');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'aluno_vinculos.csv');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AlunoVinculo', buildAlunoVinculos(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AlunoVinculo', null, {});
  }
};
