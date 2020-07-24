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
      },
      id_sala: {
        type: Sequelize.STRING(30),
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Turma');
  }
};
