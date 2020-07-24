'use strict';

const path = require('path');
const { readFile, buildDiscentesVinculos } = require('../../database/populateDB');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'aluno_vinculos.csv');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DiscenteVinculo', buildDiscentesVinculos(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DiscenteVinculo', null, {});
  }
};
