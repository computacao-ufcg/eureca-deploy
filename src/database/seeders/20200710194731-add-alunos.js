'use strict';

const path = require('path');
const { readFile, buildDiscentes } = require('../../database/populateDB');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'aluno.csv');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Discente', buildDiscentes(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Discente', null, {});
  }
};
