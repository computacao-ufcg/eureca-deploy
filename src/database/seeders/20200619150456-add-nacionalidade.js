'use strict';

const path = require('path');
const { readFile, buildNacionalidades } = require('../../util/readSync');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'nacionalidade.csv');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Nacionalidade', buildNacionalidades(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Nacionalidade', null, {});
  }
};
