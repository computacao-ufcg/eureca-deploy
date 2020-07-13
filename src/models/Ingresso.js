const { Model, DataTypes } = require('sequelize');

class Ingresso extends Model {
  static init(connection) {
    super.init({
      descricao_ingresso: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.hasOne(models.Aluno, { foreignKey: 'id_ingresso', as: 'ingresso-aluno' });
  }
}

module.exports = Ingresso;