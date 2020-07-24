'use strict';

const path = require('path');
const { readFile, buildNaturalidades } = require('../populateDB');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'municipio.csv');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Naturalidade', buildNaturalidades(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Naturalidade', null, {});
  }
};
