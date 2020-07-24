const { Model, DataTypes } = require('sequelize');

class Horario extends Model {
  static init(connection) {
    super.init({
      descricao: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }
}

module.exports = Horario;