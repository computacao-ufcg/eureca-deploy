const { Model, DataTypes } = require('sequelize');

class SituacaoDisciplina extends Model {
  static init(connection) {
    super.init({
      descricao: DataTypes.STRING(20),
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }
}

module.exports = SituacaoDisciplina;