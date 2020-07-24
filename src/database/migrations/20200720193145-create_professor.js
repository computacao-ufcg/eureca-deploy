'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Professor', { 
      siape: {
        type: Sequelize.STRING(7),
        primaryKey: true,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Professor');
  }
};
