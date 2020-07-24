const { Model, DataTypes } = require('sequelize');

class Professor extends Model {
  static init(connection) {
    super.init({
      siape: {
        type: DataTypes.STRING(7),
        primaryKey: true,
        allowNull: false,
      }
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }
}

module.exports = Professor;