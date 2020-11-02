const { Model, DataTypes } = require('sequelize');

class Curriculo extends Model {
  static init(connection) {
    super.init({
      codigo_disciplina: {
        type: DataTypes.STRING(7),
        primaryKey: true,
        allowNull: false,
      },
      id_tipo_disciplina: DataTypes.INTEGER,
      id_unidade_academica: DataTypes.INTEGER,
    }, {
      sequelize: connection,
      timestamps: false,
    })
  }
}

module.exports = Curriculo;