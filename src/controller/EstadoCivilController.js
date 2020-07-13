const EstadoCivil = require('../models/EstadoCivil');

module.exports = {
  async store(req, res) {
    const {
      estado_civil
    } = req.body;

    const civil_state = await EstadoCivil.create({ estado_civil });

    return res.json(civil_state);
  }
}