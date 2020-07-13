const { Model, DataTypes } = require('sequelize');

class PaisOrigem extends Model {
  static init(connection) {
    super.init({
      país_origem: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.hasOne(models.Aluno, { foreignKey: 'id_pais_origem', as: 'pais-origem-aluno' });
  }
}

module.exports = PaisOrigem;