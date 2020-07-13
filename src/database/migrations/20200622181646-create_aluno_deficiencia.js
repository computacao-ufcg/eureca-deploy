'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AlunoDeficiencia', { 
      cpf_aluno: {
        type: Sequelize.STRING(11),
        allowNull: false,
        primaryKey: true,
        references: { model: 'Aluno', key: 'cpf' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      codigo_deficiencia: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: { model: 'Deficiencia', key: 'codigo_deficiencia' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('AlunoDeficiencia');
  }
};
