'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Falta', { 
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
