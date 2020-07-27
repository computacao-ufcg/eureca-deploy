'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DiscenteDisciplina', { 
      matricula: {
        type: Sequelize.STRING(9),
        allowNull: false,
        // references: { model: 'DiscenteVinculo', key: 'matricula' },
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE',
      },
      id_turma: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Turma', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      num_faltas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nota1: {
        type: Sequelize.REAL,
        allowNull: false,
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
        allowNull: false,
      },
      prova_final: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      media_final: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      id_situacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
