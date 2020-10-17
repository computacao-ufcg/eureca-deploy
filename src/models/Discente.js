const { Model, DataTypes } = require('sequelize');

class Discente extends Model {
  static init(connection) {
    super.init({
      cpf: {
        type: DataTypes.STRING(11),
        primaryKey: true,
      },
      nome: DataTypes.STRING(100),
      ano_nascimento: DataTypes.INTEGER,
      email: DataTypes.STRING,
      id_genero: DataTypes.INTEGER,
      id_estado_civil: DataTypes.INTEGER,
      id_nacionalidade: DataTypes.INTEGER,
      id_pais_origem: DataTypes.INTEGER,
      id_naturalidade: DataTypes.INTEGER,
      id_cor: DataTypes.INTEGER
    }, {
      sequelize: connection,
      timestamps: false,
    });
  }

  static associate(models) {
    this.hasMany(models.DiscenteVinculo, { foreignKey: 'cpf', as: 'aluno' });
    this.belongsTo(models.Genero, { foreignKey: 'id_genero', as: 'genero-aluno' });
    this.belongsTo(models.EstadoCivil, { foreignKey: 'id_estado_civil', as: 'estado-civil-aluno' });
    this.belongsTo(models.Nacionalidade, { foreignKey: 'id_nacionalidade', as: 'nacionalidade-aluno' });
    this.belongsTo(models.Pais, { foreignKey: 'id_pais_origem', as: 'pais-origem-aluno' });
    this.belongsTo(models.Naturalidade, { foreignKey: 'id_naturalidade', as: 'naturalidade-aluno' });
    this.belongsTo(models.Cor, { foreignKey: 'id_cor', as: 'raca-aluno' });
    this.belongsToMany(models.Deficiencia, { foreignKey: 'cpf_aluno', through: 'AlunoDeficiencia', as: 'aluno-deficiencias' });
  }
}

module.exports = Discente;