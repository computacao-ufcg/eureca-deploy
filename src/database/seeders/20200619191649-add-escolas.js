'use strict';

const path = require('path');
const { readFile, buildEscolas } = require('../../util/readSync');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'escola.csv');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Escola', buildEscolas(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Escola', null, {});
  }
};
