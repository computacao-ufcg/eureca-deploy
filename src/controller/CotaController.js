const Cota = require('../models/Cota');

module.exports = {
  async store(req, res) {
    const {
      descricao
    } = req.body;

    const cota = await Cota.create({ descricao });

    return res.json(cota);
  }
}