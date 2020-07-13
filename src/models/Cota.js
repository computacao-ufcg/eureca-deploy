const { Model, DataTypes } = require('sequelize');

class Cota extends Model {
  static init(connection) {
    super.init({
      descricao_cota: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.hasOne(models.Aluno, { foreignKey: 'id_cota', as: 'cota-aluno' });
  }
}

module.exports = Cota;