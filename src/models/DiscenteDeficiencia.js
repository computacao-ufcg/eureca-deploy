const { Model, DataTypes } = require('sequelize');

class DiscenteDeficiencia extends Model {
  static init(connection) {
    super.init({
      cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
        primaryKey: true,
      },
      id_deficiencia: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      }
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }
}

module.exports = DiscenteDeficiencia;