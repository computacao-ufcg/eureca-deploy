'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Turma', {
      codigo_turma: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_disciplina: {
        type: Sequelize.STRING(7),
        allowNull: false,
        references: { model: 'Disciplina', key: 'codigo_disciplina' },
      },
      numero_turma: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      periodo: {
        type: Sequelize.STRING(6),
        allowNull: false,
      },
      id_professor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Professor', key: 'codigo_professor' },
      },
      id_horario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Horario', key: 'codigo_horario' },
      },
      sala: {
        type: Sequelize.STRING(30),
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Turma');
  }
};
