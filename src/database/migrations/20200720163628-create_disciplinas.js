'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Disciplina', { 
      codigo_disciplina: {
        type: Sequelize.STRING(7),
        primaryKey: true,
        allowNull: false,
      },
      id_tipo_disciplina: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'TipoDisciplina', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      creditos: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      carga_horaria: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Disciplina');
  }
};
