const { Model, DataTypes } = require('sequelize');

class Nacionalidade extends Model {
  static init(connection) {
    super.init({
      nacionalidade: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.hasOne(models.Aluno, { foreignKey: 'id_nacionalidade', as: 'nacionalidade-aluno' });
  }
}

module.exports = Nacionalidade;