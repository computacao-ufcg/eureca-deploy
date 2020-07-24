const { Model, DataTypes } = require('sequelize');

class Genero extends Model {
  static init(connection) {
    super.init({
      descricao: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.hasOne(models.Discente, { foreignKey: 'id_genero', as: 'genero-aluno' });
  }
}

module.exports = Genero;