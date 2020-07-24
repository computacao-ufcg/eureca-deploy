const Discente = require('../models/Discente');
const Deficiencia = require('../models/Deficiencia');
const DiscenteDeficiencia = require('../models/DiscenteDeficiencia');

module.exports = {
  async store(req, res) {
    const { cpf } = req.headers;
    const { id_deficiencia } = req.params;

    const discente = await Discente.findByPk(cpf);

    if (!discente) {
      return res.json({ error: 'Student not found' });
    }

    const def = await Deficiencia.findByPk(id_deficiencia);

    if (!def) {
      return res.json({ error: 'Deficiency not found' });
    }

    const aluno_deficiencia = await DiscenteDeficiencia.create({
      cpf,
      id_deficiencia
    });

    return res.json(aluno_deficiencia);
  }
}