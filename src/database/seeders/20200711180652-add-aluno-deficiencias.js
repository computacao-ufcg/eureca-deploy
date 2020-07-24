'use strict';

const path = require('path');
const { readFile, buildDiscentesDeficiencias } = require('../../database/populateDB');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'aluno_deficiencias.csv');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DiscenteDeficiencia', buildDiscentesDeficiencias(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DiscenteDeficiencia', null, {});
  }
};
