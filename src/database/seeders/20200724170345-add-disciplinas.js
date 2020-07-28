'use strict';

const path = require('path');
const { readFile, buildDisciplinas } = require('../../database/populateDB');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'Disciplina.data');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Disciplina', buildDisciplinas(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Disciplina', null, {});
  }
};
