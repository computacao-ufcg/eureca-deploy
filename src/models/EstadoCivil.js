const { Model, DataTypes } = require('sequelize');

class EstadoCivil extends Model {
  static init(connection) {
    super.init({
      estado_civil: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.hasOne(models.Aluno, { foreignKey: 'id_estado_civil', as: 'estado-civil-aluno' });
  }
}

module.exports = EstadoCivil;