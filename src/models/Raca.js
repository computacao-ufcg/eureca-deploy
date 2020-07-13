const { Model, DataTypes } = require('sequelize');

class Raca extends Model {
  static init(connection) {
    super.init({
      raça: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.hasOne(models.Raca, { foreignKey: 'id_raca', as: 'raca-aluno' });
  }
}

module.exports = Raca;