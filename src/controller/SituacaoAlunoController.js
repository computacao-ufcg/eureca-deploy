const SituacaoAluno = require('../models/SituacaoAluno');

module.exports = {
  async store(req, res) {
    const {
      descricao_situacao
    } = req.body;

    const sit_aluno = await SituacaoAluno.create({ descricao_situacao });

    return res.json(sit_aluno);
  }
}