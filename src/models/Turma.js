const { Model, DataTypes } = require('sequelize');

class Turma extends Model {
  static init(connection) {
    super.init({
      id_disciplina: DataTypes.STRING(7),
      turma: DataTypes.INTEGER,
      periodo: DataTypes.STRING(6),
      id_professor: DataTypes.STRING(7),
      id_horario: DataTypes.INTEGER,
      id_sala: DataTypes.STRING(30),
    }, {
      sequelize: connection,
      timestamps: false,
    })
  }
}

module.exports = Turma;