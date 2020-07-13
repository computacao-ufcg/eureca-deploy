'use strict';

const path = require('path');
const { readFile, buildMunicipios } = require('../../util/readSync');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'municipio.csv');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Municipio', buildMunicipios(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Municipio', null, {});
  }
};
