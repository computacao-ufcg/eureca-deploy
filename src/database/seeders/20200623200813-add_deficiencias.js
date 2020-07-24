'use strict';

const path = require('path');
const { readFile, buildDescricao } = require('../../database/populateDB');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'deficiencia.csv');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Deficiencia', buildDescricao(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Deficiencia', null, {});
  }
};
