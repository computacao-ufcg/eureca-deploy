const { Model, DataTypes } = require('sequelize');

class Falta extends Model {
  static init(connection) {
    super.init({
      id_turma: DataTypes.INTEGER,
      matricula: DataTypes.STRING(9),
      data: DataTypes.DATE,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }
}

module.exports = Falta;