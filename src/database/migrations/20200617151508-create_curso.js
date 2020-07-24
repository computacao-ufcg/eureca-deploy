'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Curso', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Curso');
  }
};
