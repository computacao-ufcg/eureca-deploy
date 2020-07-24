'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cor', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING(15),
        allowNull: false,
        unique: true,
      }, 
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cor');
  }
};
