'use strict';

const path = require('path');
const { readFile, buildCursos } = require('../../util/readSync');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'cursos.csv');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Curso', buildCursos(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Curso', null, {});
  }
};
