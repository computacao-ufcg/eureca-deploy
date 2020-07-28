'use strict';

const path = require('path');
const { readFile, buildDescricao } = require('../../database/populateDB');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'SituacaoDisciplina.data');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SituacaoDisciplina', buildDescricao(readFile(filePath)), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SituacaoDisciplina', null, {});
  }
};
