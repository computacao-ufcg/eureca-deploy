'use strict';

const path = require('path');
const { readFile, buildDescricao } = require('../../database/populateDB');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'cota.csv');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cota', buildDescricao(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cota', null, {});
  }
};
