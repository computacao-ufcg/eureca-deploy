const { Model, DataTypes } = require('sequelize');

class UnidadeAcademica extends Model {
  static init(connection) {
    super.init({
      descricao: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    })
  }
}

module.exports = UnidadeAcademica;