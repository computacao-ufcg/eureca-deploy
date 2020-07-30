'use strict';

const path = require('path');
const { readFile, buildDiscenteDisciplinas } = require('../../database/populateDB');
var filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'DiscenteDisciplina.data');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DiscenteDisciplina',buildDiscenteDisciplinas(readFile(filePath)) , {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DiscenteDisciplina', null, {});
  }
};
