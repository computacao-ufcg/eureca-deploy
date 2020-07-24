const Cor = require('../models/Cor');

module.exports = {
  async store(req, res) {
    const {
      descricao
    } = req.body;

    const breed = await Cor.create({ descricao });

    return res.json(breed);
  }
}