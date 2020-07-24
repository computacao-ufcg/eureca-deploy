const { Model, DataTypes } = require('sequelize');

class EstadoCivil extends Model {
  static init(connection) {
    super.init({
      descricao: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.hasOne(models.Discente, { foreignKey: 'id_estado_civil', as: 'estado-civil-aluno' });
  }
}

module.exports = EstadoCivil;