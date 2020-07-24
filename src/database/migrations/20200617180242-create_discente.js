'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Discente', {
      cpf: {
        type: Sequelize.STRING(11),
        primaryKey: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      id_situacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'SituacaoDiscente', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      semestre_situacao: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      id_ingresso: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Ingresso', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      semestre_ingresso: {
        type: Sequelize.STRING(6),
        allowNull: false,
      },
      ano_nascimento: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_cota: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Cota', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_tipo_escola: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Escola', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      ano_conclusao_ensino_medio: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      id_genero: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Genero', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_estado_civil: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'EstadoCivil', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_nacionalidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Nacionalidade', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_pais_origem: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Pais', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_naturalidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Naturalidade', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_cor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Cor', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Discente');
  }
};