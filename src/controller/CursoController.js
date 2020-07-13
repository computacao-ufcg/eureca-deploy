const Curso = require('../models/Curso');

module.exports = {
  async store(req, res) {
    const {
      codigo_curso,
      nome_curso
    } = req.body;

    const curso = await Curso.create({ codigo_curso, nome_curso });

    return res.json(curso);
  }
}