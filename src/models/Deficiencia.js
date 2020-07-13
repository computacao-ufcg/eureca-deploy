const { Model, DataTypes } = require('sequelize');

class Deficiencia extends Model {
  static init(connection) {
    super.init({
      codigo_deficiencia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      descricao_deficiencia: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.belongsToMany(models.Aluno, { foreignKey: 'codigo_deficiencia', through: 'AlunoDeficiencia', as: 'deficiencia-alunos' });
  }
}

module.exports = Deficiencia;