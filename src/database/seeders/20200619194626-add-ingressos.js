'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ingresso', [
      { descricao_ingresso: 'NÃO REGISTRADO' },
      { descricao_ingresso: 'CONVENIO PEC-G' },
      { descricao_ingresso: 'GRADUADO' },
      { descricao_ingresso: 'JUDICIAL' },
      { descricao_ingresso: 'REOPCAO' },
      { descricao_ingresso: 'SISU' },
      { descricao_ingresso: 'TRANSFERENCIA' },
      { descricao_ingresso: 'TRANSFERENCIA EX-OFFICIO' },
      { descricao_ingresso: 'VESTIBULAR' },
      { descricao_ingresso: 'VESTIBULAR / ENEM' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Ingresso', null, {});
  }
};
