const { Model, DataTypes } = require('sequelize');

class Genero extends Model {
  static init(connection) {
    super.init({
      genero: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.hasOne(models.Aluno, { foreignKey: 'id_genero', as: 'genero-aluno' });
  }
}

module.exports = Genero;