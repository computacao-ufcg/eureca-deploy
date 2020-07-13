const Cota = require('../models/Cota');

module.exports = {
  async store(req, res) {
    const {
      descricao_cota
    } = req.body;

    const cota = await Cota.create({ descricao_cota });

    return res.json(cota);
  }
}