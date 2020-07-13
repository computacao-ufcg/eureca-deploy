'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Deficiencia', [
      { descricao_deficiencia: 'Autismo' },
      { descricao_deficiencia: 'Baixa Visão' },
      { descricao_deficiencia: 'Cegueira' },
      { descricao_deficiencia: 'Deficiência auditiva' },
      { descricao_deficiencia: 'Deficiência física' },
      { descricao_deficiencia: 'Deficiência intelectual' },
      { descricao_deficiencia: 'Sem deficiências' },
      { descricao_deficiencia: 'Síndrome de Asperger' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Deficiencia', null, {});
  }
};
