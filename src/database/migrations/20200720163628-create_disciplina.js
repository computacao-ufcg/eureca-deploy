'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Disciplina', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      codigo: {
        type: Sequelize.STRING(7),
        allowNull: false,
      },
      creditos: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      horas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Disciplina');
  }
};
