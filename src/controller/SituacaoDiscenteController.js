const SituacaoDiscente = require('../models/SituacaoDiscente');

module.exports = {
  async store(req, res) {
    const {
      descricao
    } = req.body;

    const sit_aluno = await SituacaoDiscente.create({ descricao });

    return res.json(sit_aluno);
  }
}