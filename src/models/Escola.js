const { Model, DataTypes } = require('sequelize');

class Escola extends Model {
  static init(connection) {
    super.init({
      tipo_escola: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.hasOne(models.Aluno, { foreignKey: 'id_tipo_escola', as: 'escola-aluno' })
  }
}

module.exports = Escola;