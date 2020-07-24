'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Falta', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_turma: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Turma', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      matricula: {
        type: Sequelize.STRING(9),
        allowNull: false,
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Falta');
  }
};
