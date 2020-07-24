const { Model, DataTypes } = require('sequelize');

class Disciplina extends Model {
  static init(connection) {
    super.init({
      codigo: DataTypes.STRING(7),
      creditos: DataTypes.INTEGER,
      horas: DataTypes.INTEGER,
      nome: DataTypes.STRING(60),
    }, {
      sequelize: connection,
      timestamps: false,
    })
  }
}

module.exports = Disciplina;