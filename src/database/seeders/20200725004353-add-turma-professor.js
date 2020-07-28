'use strict';

const path = require('path');
const { readFile, buildTurmaProfessores } = require('../../database/populateDB');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'TurmaProfessor.data');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TurmaProfessor', buildTurmaProfessores(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TurmaProfessor', null, {});
  }
};
