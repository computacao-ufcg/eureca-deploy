const { Model, DataTypes } = require('sequelize');

class SituacaoAluno extends Model {
  static init(connection) {
    super.init({
      descricao_situacao: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false,
    })
  }

  static associate(models) {
    this.hasOne(models.Aluno, { foreignKey: 'id_situacao', as: 'situacao-aluno' });
  }
} 

module.exports = SituacaoAluno;