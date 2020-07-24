const { Model, DataTypes } = require('sequelize');

class Deficiencia extends Model {
  static init(connection) {
    super.init({
      descricao: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.belongsToMany(models.DiscenteDeficiencia, { foreignKey: 'codigo_deficiencia', through: 'AlunoDeficiencia', as: 'deficiencia-alunos' });
  }
}

module.exports = Deficiencia;