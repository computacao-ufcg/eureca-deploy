const { Model, DataTypes } = require('sequelize');

class Ingresso extends Model {
  static init(connection) {
    super.init({
      descricao: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.hasOne(models.DiscenteVinculo, { foreignKey: 'id_ingresso', as: 'ingresso-aluno' });
  }
}

module.exports = Ingresso;