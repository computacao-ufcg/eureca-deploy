const { Model, DataTypes } = require('sequelize');

class TipoDisciplina extends Model {
  static init(connection) {
    super.init({
      descricao: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    })
  }
}

module.exports = TipoDisciplina;