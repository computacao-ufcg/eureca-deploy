const { Model, DataTypes } = require('sequelize');

class AlunoDeficiencia extends Model {
  static init(connection) {
    super.init({
      cpf_aluno: {
        type: DataTypes.STRING(11),
        allowNull: false,
        primaryKey: true,
      },
      codigo_deficiencia: {
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

module.exports = AlunoDeficiencia;