const { Model, DataTypes } = require('sequelize');

class SituacaoDiscente extends Model {
  static init(connection) {
    super.init({
      descricao: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    })
  }

  static associate(models) {
    this.hasOne(models.DiscenteVinculo, { foreignKey: 'id_situacao', as: 'situacao-aluno' });
  }
} 

module.exports = SituacaoDiscente;