'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EstadoCivil', [
      { estado_civil: 'Não registrado' },
      { estado_civil: 'Casado(a)' },
      { estado_civil: 'Solteiro(a)' },
      { estado_civil: 'Viúvo(a)' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EstadoCivil', null, {});
  }
};
