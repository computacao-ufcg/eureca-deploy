const Municipio = require('../models/Municipio');

module.exports = {
  async store(req, res) {
    const {
      municipio,
      estado
    } = req.body;

    const county = await Municipio.create({ municipio, estado });

    return res.json(county);
  }
}