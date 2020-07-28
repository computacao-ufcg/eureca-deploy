'use strict';

const path = require('path');
const { readFile, buildDescricao } = require('../../database/populateDB');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'Horario.data');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Horario', buildDescricao(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Horario', null, {});
  }
};
