const { Model, DataTypes } = require('sequelize');

class Cor extends Model {
  static init(connection) {
    super.init({
      descricao: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.hasOne(models.Cor, { foreignKey: 'id_cor', as: 'raca-aluno' });
  }
}

module.exports = Cor;