'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cota', [
      { descricao_cota: 'Não Registrada' },
      { descricao_cota: 'Candidato autodeclarado preto, pardo ou indígena que, \
          independentemente da renda, tenha cursado integralmente o ensino médio \
          em escola pública.' },
      { descricao_cota: 'Candidato autodeclarado preto, pardo ou indígena, com \
          renda familiar bruta per capita igual ou inferior a 1,5 salário mínimo \
          que tenha cursado integralmente o ensino médio em escola pública.' },
      { descricao_cota: 'Candidato com deficiência autodeclarado preto, pardo ou \
          indígena que, independentemente da renda, tenha cursado integralmente o \
          ensino médio em escola pública.' },
      { descricao_cota: 'Candidato com deficiência autodeclarado preto, pardo ou \
          indígena, com renda familiar bruta per capita igual ou inferior a 1,5 \
          salário mínimo que tenha cursado integralmente o ensino médio em escola \
          pública.' },
      { descricao_cota: 'Candidato com deficiência com renda familiar bruta per \
          capita igual ou inferior a 1,5 salário mínimo que tenha cursado integralmente \
          o ensino médio em escola pública.' },
      { descricao_cota: 'Candidato com deficiência que, independentemente da renda, \
          tenha cursado integralmente o ensino médio em escola pública.' },
      { descricao_cota: 'Candidato com renda familiar bruta per capita igual ou inferior \
          a 1,5 salário mínimo que tenha cursado integralmente o ensino médio em escola \
          pública.' },
      { descricao_cota: 'Candidato que, independentemente da renda, tenha cursado integralmente \
          o ensino médio em escola pública.' }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cota', null, {});
  }
};
