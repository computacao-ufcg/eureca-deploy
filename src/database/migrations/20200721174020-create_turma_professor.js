'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TurmaProfessor', { 
      id_turma: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: { model: 'Turma', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      siape: {
        type: Sequelize.STRING(7),
        allowNull: false,
        primaryKey: true,
        references: { model: 'Professor', key: 'siape' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TurmaProfessor');
  }
};
