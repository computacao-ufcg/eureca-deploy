'use strict';

const path = require('path');
const { readFile, buildTurmas } = require('../../database/populateDB');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'Turma.data');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Turma', buildTurmas(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Turma', null, {});
  }
};
