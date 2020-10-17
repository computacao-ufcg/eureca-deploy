const { Model, DataTypes } = require('sequelize');

class Escola extends Model {
  static init(connection) {
    super.init({
      descricao: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.hasOne(models.DiscenteVinculo, { foreignKey: 'id_tipo_escola', as: 'escola-aluno' })
  }
}

module.exports = Escola;