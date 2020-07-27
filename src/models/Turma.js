const { Model, DataTypes } = require('sequelize');

class Turma extends Model {
  static init(connection) {
    super.init({
      id_disciplina: DataTypes.INTEGER,
      turma: DataTypes.INTEGER,
      periodo: DataTypes.STRING(6),
      id_horario: DataTypes.INTEGER,
      id_sala: DataTypes.INTEGER,
    }, {
      sequelize: connection,
      timestamps: false,
    })
  }
}

module.exports = Turma;