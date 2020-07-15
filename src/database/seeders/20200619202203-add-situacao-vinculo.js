'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SituacaoVinculo', [
      { descricao_situacao: 'CANCELADO 3 REPROV MESMA DISCIPLINA' },
      { descricao_situacao: 'CANCELADO NOVO INGRESSO MESMO CURSO' },
      { descricao_situacao: 'CANCELADO NOVO INGRESSO OUTRO CURSO' },
      { descricao_situacao: 'CANCELADO REPROVOU TODAS POR FALTAS' },
      { descricao_situacao: 'CANCELAMENTO DE MATRICULA' },
      { descricao_situacao: 'CANCELAMENTO P/ DECISAO JUDICIAL' },
      { descricao_situacao: 'CANCELAMENTO P/ MUDANCA CURSO' },
      { descricao_situacao: 'CANCELAMENTO P/ SOLICITACAO ALUNO' },
      { descricao_situacao: 'CANCELAMENTO POR ABANDONO' },
      { descricao_situacao: 'GRADUADO' },
      { descricao_situacao: 'REGULAR' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SituacaoVinculo', null, {});
  }
};
