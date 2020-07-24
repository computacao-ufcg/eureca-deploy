const Ingresso = require('../models/Ingresso');

module.exports = {
  async store(req, res) {
    const {
      descricao
    } = req.body;

    const ingresso = await Ingresso.create({ descricao });

    return res.json(ingresso);
  }
}