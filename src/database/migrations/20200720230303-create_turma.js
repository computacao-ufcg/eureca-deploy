'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Turma', {
      id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_disciplina: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Disciplina', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      turma: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      periodo: {
        type: Sequelize.STRING(6),
        allowNull: false,
      },
      id_horario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Horario', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_sala: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Sala', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Turma');
  }
};
