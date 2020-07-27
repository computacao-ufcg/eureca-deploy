const { Model, DataTypes, Sequelize } = require('sequelize');

class Falta extends Model {
  static init(connection) {
    super.init({
      matricula: Sequelize.STRING(9),
      id_turma: DataTypes.INTEGER,
      num_aula: DataTypes.INTEGER,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }
}

module.exports = Falta;