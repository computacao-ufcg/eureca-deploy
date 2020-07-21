const { Model, DataTypes } = require('sequelize');

class Disciplina extends Model {
  static init(connection) {
    super.init({
      codigo_disciplina: {
        type: DataTypes.STRING(7),
        primaryKey: true,
        allowNull: false,
      },
      id_tipo_disciplina: DataTypes.INTEGER,
      creditos: DataTypes.INTEGER,
      carga_horaria: DataTypes.INTEGER,
      nome: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    })
  }
}

module.exports = Disciplina;