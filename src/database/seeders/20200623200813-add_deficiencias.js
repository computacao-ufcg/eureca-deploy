'use strict';

const path = require('path');
const { readFile, buildDeficiencias } = require('../../util/readSync');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'deficiencia.csv');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Deficiencia', buildDeficiencias(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Deficiencia', null, {});
  }
};
