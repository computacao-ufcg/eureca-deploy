const { Model, DataTypes } = require('sequelize');

class Turma extends Model {
  static init(connection) {
    super.init({
      codigo_turma: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      id_disciplina: DataTypes.STRING(7),
      numero_turma: DataTypes.INTEGER,
      periodo: DataTypes.STRING(6),
      id_professor: DataTypes.INTEGER,
      id_horario: DataTypes.INTEGER,
      sala: DataTypes.STRING(30),
    }, {
      sequelize: connection,
      timestamps: false,
    })
  }
}

module.exports = Turma;