'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Falta', { 
      matricula: {
        type: Sequelize.STRING(9),
        allowNull: false,
      },
      id_turma: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Turma', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      num_aula: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Falta');
  }
};
