'use strict';

const path = require('path');
const { readFile, buildGeneros } = require('../../util/readSync');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'genero.csv');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genero', buildGeneros(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genero', null, {});
  }
};
