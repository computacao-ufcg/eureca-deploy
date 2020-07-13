const Aluno = require('../models/Aluno');
const Deficiencia = require('../models/Deficiencia');
const AlunoDeficiencia = require('../models/AlunoDeficiencia');

module.exports = {
  async store(req, res) {
    const { cpf } = req.headers;
    const { id_deficiencia } = req.params;

    const aluno = await Aluno.findByPk(cpf);

    if (!aluno) {
      return res.json({ error: 'Student not found' });
    }

    const def = await Deficiencia.findByPk(id_deficiencia);

    if (!def) {
      return res.json({ error: 'Deficiency not found' });
    }

    const aluno_deficiencia = await AlunoDeficiencia.create({
      cpf_aluno: cpf,
      codigo_deficiencia: id_deficiencia
    })

    return res.json(aluno_deficiencia);
  }
}