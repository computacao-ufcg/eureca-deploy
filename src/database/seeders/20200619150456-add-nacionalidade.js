'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Nacionalidade', [
      { nacionalidade: 'Brasileira' },
      { nacionalidade: 'Brasileira - Naturalizado ou nascido no exterior' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Nacionalidade', null, {});
  }
};
