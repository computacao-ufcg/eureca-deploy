'use strict';

const path = require('path');
const { readFile, buildPaisOrigem } = require('../../database/populateDB');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'pais.csv');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PaisOrigem', buildPaisOrigem(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PaisOrigem', null, {});
  }
};
