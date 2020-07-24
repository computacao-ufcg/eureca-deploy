const { Model, DataTypes } = require('sequelize');

class Naturalidade extends Model {
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
    this.hasOne(models.Discente, { foreignKey: 'id_naturalidade', as: 'naturalidade-aluno' });
  }
}

module.exports = Naturalidade;