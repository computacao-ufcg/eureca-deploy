'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SituacaoAluno', [
      { descricao_situacao: 'Ativo' },
      { descricao_situacao: 'Inativo' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SituacaoAluno', null, {});
  }
};
