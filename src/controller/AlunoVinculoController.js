const AlunoVinculo = require('../models/AlunoVinculo');
const Curso = require('../models/Curso');
const SituacaoVinculo = require('../models/SituacaoVinculo');

module.exports = {
  async store(req, res) {
    const {
      cpf,
      matricula_vinculo,
      id_curso,
      id_situacao_vinculo,
      periodo_evasao
    } = req.body;

    const aluno_vinculo = await AlunoVinculo.create({
      cpf,
      matricula_vinculo,
      id_curso,
      id_situacao_vinculo,
      periodo_evasao
    });

    return res.json(aluno_vinculo);
  },

  async show(req, res) {
    const { cpf } = req.headers;
    const { 
      id_curso, 
      id_sit_vinc } = req.params;
    
    const curso = await Curso.findByPk(id_curso);

    const sit_vinc = await SituacaoVinculo.findByPk(id_sit_vinc);

    if (!curso || !sit_vinc) {
      return res.status(400).json({ error: 'course or link situation does not exists' })
    }

    const aluno_vinculo = await AlunoVinculo.findByPk(cpf, {
      include: { association: 'aluno' },
      attributes: ['cpf', 'matricula_vinculo', 'id_curso', 'id_situacao_vinculo', 'periodo_evasao']
    });

    if (!aluno_vinculo) {
      return res.status(400).json({ error: 'student bond does not exists' });
    }

    return res.json(aluno_vinculo);
  }
}