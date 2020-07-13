const { Model, DataTypes } = require('sequelize');

class Municipio extends Model {
  static init(connection) {
    super.init({
      municipio: DataTypes.STRING,
      estado: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.hasOne(models.Aluno, { foreignKey: 'id_naturalidade', as: 'naturalidade-aluno' });
  }
}

module.exports = Municipio;