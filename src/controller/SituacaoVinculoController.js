const SituacaoVinculo = require('../models/SituacaoVinculo');

module.exports = {
  async store(req, res) {
    const {
      descricao_situacao
    } = req.body;

    const sit_vinculo = await SituacaoVinculo.create({ descricao_situacao });

    return res.json(sit_vinculo);
  }
}