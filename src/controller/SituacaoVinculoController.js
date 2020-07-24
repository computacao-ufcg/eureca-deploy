const SituacaoVinculo = require('../models/SituacaoVinculo');

module.exports = {
  async store(req, res) {
    const {
      descricao
    } = req.body;

    const sit_vinculo = await SituacaoVinculo.create({ descricao });

    return res.json(sit_vinculo);
  }
}