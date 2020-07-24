const Pais = require('../models/Pais');

module.exports = {
  async store(req, res) {
    const {
      nome
    } = req.body;

    const origin_country = await Pais.create({ nome });

    return res.json(origin_country);
  }
}