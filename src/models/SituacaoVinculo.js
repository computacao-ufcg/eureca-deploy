const { Model, DataTypes } = require('sequelize');

class SituacaoVinculo extends Model {
  static init(connection) {
    super.init({
      descricao_situacao: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.hasOne(models.AlunoVinculo, { foreignKey: 'id_situacao_vinculo', as: 'situacao_vinculo' });
  }
}

module.exports = SituacaoVinculo;