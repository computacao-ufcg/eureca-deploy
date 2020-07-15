'use strict';

const path = require('path');
const { readFile, buildEstadosCivis } = require('../../util/readSync');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'estado_civil.csv');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EstadoCivil', buildEstadosCivis(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EstadoCivil', null, {});
  }
};
