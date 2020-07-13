const Nacionalidade = require('../models/Nacionalidade');

module.exports = {
  async store(req, res) {
    const {
      nacionalidade
    } = req.body;

    const nationality = await Nacionalidade.create({ nacionalidade });

    return res.json(nationality);
  }
}