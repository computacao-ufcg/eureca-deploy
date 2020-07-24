'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Deficiencia', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Deficiencia');
  }
};
