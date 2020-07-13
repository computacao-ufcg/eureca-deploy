const Genero = require('../models/Genero');

module.exports = {
  async store(req, res) {
    const {
      genero
    } = req.body;

    const sex = await Genero.create({ genero });

    return res.json(sex);
  }
}