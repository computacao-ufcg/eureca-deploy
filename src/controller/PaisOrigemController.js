const PaisOrigem = require('../models/PaisOrigem');

module.exports = {
  async store(req, res) {
    const {
      país_origem
    } = req.body;

    const origin_country = await PaisOrigem.create({ país_origem });

    return res.json(origin_country);
  }
}