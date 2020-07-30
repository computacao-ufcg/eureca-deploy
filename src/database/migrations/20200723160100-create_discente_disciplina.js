'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DiscenteDisciplina', { 
      matricula: {
        type: Sequelize.STRING(9),
        allowNull: false,
      },
      id_turma: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'Turma', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      num_faltas: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      nota1: {
        type: Sequelize.REAL,
        allowNull: true,
      },
      nota2: {
        type: Sequelize.REAL,
        allowNull: true,
      },
      nota3: {
        type: Sequelize.REAL,
        allowNull: true,
      },
      nota4: {
        type: Sequelize.REAL,
        allowNull: true,
      },
      nota5: {
        type: Sequelize.REAL,
        allowNull: true,
      },
      nota6: {
        type: Sequelize.REAL,
        allowNull: true,
      },
      nota7: {
        type: Sequelize.REAL,
        allowNull: true,
      },
      nota8: {
        type: Sequelize.REAL,
        allowNull: true,
      },
      media_parcial: {
        type: Sequelize.REAL,
        allowNull: true,
      },
      prova_final: {
        type: Sequelize.REAL,
        allowNull: true,
      },
      media_final: {
        type: Sequelize.REAL,
        allowNull: true,
      },
      id_situacao: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'SituacaoDisciplina', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('DiscenteDisciplina');
  }
};
