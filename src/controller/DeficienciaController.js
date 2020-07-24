const Deficiencia = require('../models/Deficiencia');

module.exports = {
  async store(req, res) {
    const { descricao } = req.body;
    
    const deficiencia = await Deficiencia.create({
      descricao
    });

    return res.json(deficiencia);
  },

  async show(req, res) {
    const { id_deficiencia } = req.params;

    const def = await Deficiencia.findAll({
      include: { association: 'deficiencia-alunos' },
      where: { id: id_deficiencia }
    });

    // const def = await Deficiencia.findAll({
    //   include: { association: 'deficiencia-alunos' },
    //   where: { codigo_deficiencia: id_deficiencia }
    // });

    return res.json(def);
  }
}