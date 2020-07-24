const Nacionalidade = require('../models/Nacionalidade');

module.exports = {
  async store(req, res) {
    const {
      descricao
    } = req.body;

    const nacionalidade = await Nacionalidade.create({ descricao });

    return res.json(nacionalidade);
  }
}