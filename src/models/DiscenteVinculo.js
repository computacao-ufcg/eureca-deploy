const { Model, DataTypes } = require('sequelize');

class DiscenteVinculo extends Model {
  static init(connection) {
    super.init({
      cpf: {
        type: DataTypes.STRING(11),
        primaryKey: true,
      },
      matricula: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      id_ingresso: DataTypes.INTEGER,
      semestre_ingresso: DataTypes.STRING,
      id_curso: DataTypes.INTEGER,
      id_situacao: DataTypes.INTEGER,
      semestre_situacao: DataTypes.STRING(20),
      id_situacao_vinculo: DataTypes.INTEGER,
      id_cota: DataTypes.INTEGER,
      id_tipo_escola: DataTypes.INTEGER,
      ano_conclusao_ensino_medio: DataTypes.INTEGER,
      curriculo: DataTypes.STRING(4),
      carga_hor_obrig_int: DataTypes.INTEGER,
      cred_obrig_int: DataTypes.INTEGER,
      carga_hor_opt_int: DataTypes.INTEGER,
      cred_opt_int: DataTypes.INTEGER,
      carga_hor_comp_int: DataTypes.INTEGER,
      cred_comp_int: DataTypes.INTEGER,
      cra: DataTypes.REAL,
      mc: DataTypes.REAL,
      iea: DataTypes.REAL,
      per_int: DataTypes.INTEGER,
      tranc: DataTypes.INTEGER,
      mat_inst: DataTypes.INTEGER,
      mob_estudantil: DataTypes.INTEGER,
      cred_matriculados: DataTypes.INTEGER,
      media_geral_ingresso: DataTypes.REAL,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.belongsTo(models.Discente, { foreignKey: 'cpf', as: 'aluno' });
    this.belongsTo(models.Ingresso, { foreignKey: 'id_ingresso', as: 'ingresso-aluno' });
    this.belongsTo(models.Curso, { foreignKey: 'id_curso', as: 'curso-vinculo' });
    this.belongsTo(models.SituacaoDiscente, { foreignKey: 'id_situacao', as: 'situacao-aluno' });
    this.belongsTo(models.SituacaoVinculo, { foreignKey: 'id_situacao_vinculo', as: 'situacao-vinculo' });
    this.belongsTo(models.Cota, { foreignKey: 'id_cota', as: 'cota-aluno' });
    this.belongsTo(models.Escola, { foreignKey: 'id_tipo_escola', as: 'escola-aluno' });
  }
}

module.exports = DiscenteVinculo;