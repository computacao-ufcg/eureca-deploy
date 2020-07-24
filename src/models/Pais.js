const { Model, DataTypes } = require('sequelize');

class Pais extends Model {
  static init(connection) {
    super.init({
      nome: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.hasOne(models.Discente, { foreignKey: 'id_pais_origem', as: 'pais-origem-aluno' });
  }
}

module.exports = Pais;