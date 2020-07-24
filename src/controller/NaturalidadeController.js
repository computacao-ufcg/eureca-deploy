const Naturalidade = require('../models/Naturalidade');

module.exports = {
  async store(req, res) {
    const {
      municipio,
      estado
    } = req.body;

    const naturalidade = await Naturalidade.create({ municipio, estado });

    return res.json(naturalidade);
  }
}