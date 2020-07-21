const { Model, DataTypes } = require('sequelize');

class Horario extends Model {
  static init(connection) {
    super.init({
      codigo_horario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      horario: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }
}

module.exports = Horario;