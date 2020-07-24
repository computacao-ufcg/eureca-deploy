const Genero = require('../models/Genero');

module.exports = {
  async store(req, res) {
    const {
      descricao
    } = req.body;

    const sex = await Genero.create({ descricao });

    return res.json(sex);
  }
}