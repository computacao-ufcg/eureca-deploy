const { Model, DataTypes } = require('sequelize');

class Aluno extends Model {
  static init(connection) {
    super.init({
      cpf: {
        type: DataTypes.STRING(11),
        primaryKey: true,
      },
      id_situacao: DataTypes.INTEGER,
      semestre_situacao: DataTypes.STRING(20),
      id_ingresso: DataTypes.INTEGER,
      semestre_ingresso: DataTypes.STRING,
      ano_nascimento: DataTypes.INTEGER,
      id_cota: DataTypes.INTEGER,
      id_tipo_escola: DataTypes.INTEGER,
      ano_conclusao_ensino_medio: DataTypes.INTEGER,
      email: DataTypes.STRING,
      id_genero: DataTypes.INTEGER,
      id_estado_civil: DataTypes.INTEGER,
      id_nacionalidade: DataTypes.INTEGER,
      id_pais_origem: DataTypes.INTEGER,
      id_naturalidade: DataTypes.INTEGER,
      id_raca: DataTypes.INTEGER
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.hasMany(models.AlunoVinculo, { foreignKey: 'cpf', as: 'aluno' });
    this.belongsTo(models.SituacaoAluno, { foreignKey: 'id_situacao', as: 'situacao-aluno' });
    this.belongsTo(models.Ingresso, { foreignKey: 'id_ingresso', as: 'ingresso-aluno' });
    this.belongsTo(models.Cota, { foreignKey: 'id_cota', as: 'cota-aluno' });
    this.belongsTo(models.Escola, { foreignKey: 'id_tipo_escola', as: 'escola-aluno' });
    this.belongsTo(models.Genero, { foreignKey: 'id_genero', as: 'genero-aluno' });
    this.belongsTo(models.EstadoCivil, { foreignKey: 'id_estado_civil', as: 'estado-civil-aluno' });
    this.belongsTo(models.Nacionalidade, { foreignKey: 'id_nacionalidade', as: 'nacionalidade-aluno' });
    this.belongsTo(models.PaisOrigem, { foreignKey: 'id_pais_origem', as: 'pais-origem-aluno' });
    this.belongsTo(models.Municipio, { foreignKey: 'id_naturalidade', as: 'naturalidade-aluno' });
    this.belongsTo(models.Raca, { foreignKey: 'id_raca', as: 'raca-aluno' });
    this.belongsToMany(models.Deficiencia, { foreignKey: 'cpf_aluno', through: 'AlunoDeficiencia', as: 'aluno-deficiencias' });
  }
}

module.exports = Aluno;