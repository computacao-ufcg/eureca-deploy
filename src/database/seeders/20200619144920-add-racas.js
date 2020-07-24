'use strict';

const path = require('path');
const { readFile, buildDescricao } = require('../../database/populateDB');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'cor.csv');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cor', buildDescricao(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Cor', null, {});
  }
};
