const Escola = require('../models/Escola');

module.exports = {
  async store(req, res) {
    const {
      nome_escola
    } = req.body;

    const escola = await Escola.create({ nome_escola });

    return res.json(escola);
  }
}