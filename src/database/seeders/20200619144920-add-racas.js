'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Raca', [
      { raça: 'Amarela' },
      { raça: 'Branca' },
      { raça: 'Indígena' },
      { raça: 'Não declarada' },
      { raça: 'Parda' },
      { raça: 'Preta' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Raca', null, {});
  }
};
