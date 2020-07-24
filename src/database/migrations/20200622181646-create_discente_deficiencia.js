'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DiscenteDeficiencia', { 
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
        primaryKey: true,
        references: { model: 'Discente', key: 'cpf' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_deficiencia: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: { model: 'Deficiencia', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('DiscenteDeficiencia');
  }
};
