const Raca = require('../models/Raca');

module.exports = {
  async store(req, res) {
    const {
      raça
    } = req.body;

    const breed = await Raca.create({ raça });

    return res.json(breed);
  }
}