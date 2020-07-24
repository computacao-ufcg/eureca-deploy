'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Naturalidade', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      municipio: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Naturalidade');
  }
};
