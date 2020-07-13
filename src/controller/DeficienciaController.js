const Deficiencia = require('../models/Deficiencia');
const Aluno = require('../models/Aluno');

module.exports = {
  async store(req, res) {
    const { descricao_deficiencia } = req.body;
    
    const deficiencia = await Deficiencia.create({
      descricao_deficiencia
    });

    return res.json(deficiencia);
  },

  async show(req, res) {
    const { id_deficiencia } = req.params;

    const def = await Deficiencia.findAll({
      include: { association: 'deficiencia-alunos' },
      where: { codigo_deficiencia: id_deficiencia }
    });

    return res.json(def);
  }
}