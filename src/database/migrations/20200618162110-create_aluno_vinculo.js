'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AlunoVinculo', { 
      cpf: {
        type: Sequelize.STRING(11),
        primaryKey: true,
        allowNull: false,
        references: { model: 'Aluno', key: 'cpf' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      matricula_vinculo: {
        type: Sequelize.STRING(9),
        primaryKey: true,
        allowNull: false,
      },
      id_curso: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Curso', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_situacao_vinculo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'SituacaoVinculo', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      periodo_evasao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('AlunoVinculo');
  }
};