'use strict';

const path = require('path');
const { readFile, buildIngressos } = require('../../util/readSync');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'ingresso.csv');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ingresso', buildIngressos(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Ingresso', null, {});
  }
};
