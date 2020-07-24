'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pais', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pais');
  }
};
