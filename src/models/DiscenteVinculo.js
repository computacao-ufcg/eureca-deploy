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
      id_curso: DataTypes.INTEGER,
      id_situacao_vinculo: DataTypes.INTEGER,
      semestre_vinculo: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.belongsTo(models.Discente, { foreignKey: 'cpf', as: 'aluno' });
    this.belongsTo(models.Curso, { foreignKey: 'id_curso', as: 'curso-vinculo' });
    this.belongsTo(models.SituacaoVinculo, { foreignKey: 'id_situacao_vinculo', as: 'situacao-vinculo' })
  }
}

module.exports = DiscenteVinculo;