'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Escola', [
      { tipo_escola: 'Não registrada' },
      { tipo_escola: 'Pública e privada, tendo ficado mais tempo em escola pública' },
      { tipo_escola: 'Pública e privada, tendo ficado mais tempo em escola privada' },
      { tipo_escola: 'Somente escola pública' },
      { tipo_escola: 'Somente escola privada' }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Escola', null, {});
  }
};
