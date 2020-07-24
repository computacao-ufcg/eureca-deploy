const Escola = require('../models/Escola');

module.exports = {
  async store(req, res) {
    const {
      descricao
    } = req.body;

    const escola = await Escola.create({ descricao });

    return res.json(escola);
  }
}