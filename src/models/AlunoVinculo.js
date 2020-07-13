const { Model, DataTypes } = require('sequelize');

class AlunoVinculo extends Model {
  static init(connection) {
    super.init({
      cpf: {
        type: DataTypes.STRING(11),
        primaryKey: true,
      },
      matricula_vinculo: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      id_curso: DataTypes.INTEGER,
      id_situacao_vinculo: DataTypes.INTEGER,
      periodo_evasao: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'cpf', as: 'aluno' });
    this.belongsTo(models.Curso, { foreignKey: 'id_curso', as: 'curso-vinculo' });
    this.belongsTo(models.SituacaoVinculo, { foreignKey: 'id_situacao_vinculo', as: 'situacao-vinculo' })
  }
}

module.exports = AlunoVinculo;