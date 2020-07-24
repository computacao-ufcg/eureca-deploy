const DiscenteVinculo = require('../models/DiscenteVinculo');
const Curso = require('../models/Curso');
const SituacaoVinculo = require('../models/SituacaoVinculo');

module.exports = {
  async store(req, res) {
    const {
      cpf,
      matricula,
      id_curso,
      id_situacao_vinculo,
      semestre_vinculo
    } = req.body;

    const discente_vinculo = await DiscenteVinculo.create({
      cpf,
      matricula,
      id_curso,
      id_situacao_vinculo,
      semestre_vinculo
    });

    return res.json(discente_vinculo);
  },

  async show(req, res) {
    const { cpf } = req.headers;
    const { 
      id_curso, 
      id_sit_vinc 
    } = req.params;
    
    const curso = await Curso.findByPk(id_curso);

    const sit_vinc = await SituacaoVinculo.findByPk(id_sit_vinc);

    if (!curso || !sit_vinc) {
      return res.status(400).json({ error: 'course or link situation does not exists' })
    }

    const discente_vinculo = await DiscenteVinculo.findByPk(cpf, {
      include: { association: 'aluno' },
      attributes: ['cpf', 'matricula_vinculo', 'id_curso', 'id_situacao_vinculo', 'periodo_evasao']
    });

    if (!discente_vinculo) {
      return res.status(400).json({ error: 'student bond does not exists' });
    }

    return res.json(discente_vinculo);
  }
}