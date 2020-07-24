const EstadoCivil = require('../models/EstadoCivil');

module.exports = {
  async store(req, res) {
    const {
      descricao
    } = req.body;

    const civil_state = await EstadoCivil.create({ descricao });

    return res.json(civil_state);
  }
}