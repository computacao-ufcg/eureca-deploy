const Ingresso = require('../models/Ingresso');

module.exports = {
  async store(req, res) {
    const {
      descricao_ingresso
    } = req.body;

    const ingresso = await Ingresso.create({ descricao_ingresso });

    return res.json(ingresso);
  }
}