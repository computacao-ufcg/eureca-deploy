'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SituacaoDisciplina', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SituacaoDisciplina');
  }
};
