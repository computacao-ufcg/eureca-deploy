const connection = require('../database/index');
const Discente = require('../models/Discente');

module.exports = {
  async store(req, res) {
    const { 
      cpf,
      nome,
      id_situacao,
      semestre_situacao,
      id_ingresso,
      semestre_ingresso,
      ano_nascimento,
      id_cota,
      id_tipo_escola,
      ano_conclusao_ensino_medio,
      email,
      id_genero,
      id_estado_civil,
      id_nacionalidade,
      id_pais_origem,
      id_naturalidade,
      id_cor
    } = req.body;

    const discente = await Discente.create({
      cpf,
      nome,
      id_situacao,
      semestre_situacao,
      id_ingresso,
      semestre_ingresso,
      ano_nascimento,
      id_cota,
      id_tipo_escola,
      ano_conclusao_ensino_medio,
      email,
      id_genero,
      id_estado_civil,
      id_nacionalidade,
      id_pais_origem,
      id_naturalidade,
      id_cor
    });

    return res.json(discente);
  },

  async show(req, res) {
    const { cpf } = req.params;

    const discente = await Discente.findByPk(cpf, {
      include: { association: 'aluno' },
      where: { cpf_Discente: cpf }
    });

    if (!discente) {
      return res.status(400).json({ error: 'The student does not exist' });
    }

    return res.json(discente);
  },

  async remove(req, res) {
    const { cpf } = req.params;

    const discente = await Discente.findByPk(cpf);

    if (!discente) {
      return res.status(400).json({ error: 'The student does not exist' });
    }

    return await Discente.destroy({
      where: { cpf }
    });
  },

  async list(req, res) {
    const { table_name } = req.headers;
    const { query_front } = req.body;

    if (table_name) {
      const query = `SELECT * FROM \"${table_name}\" LIMIT 40`
      const [result] = await connection.query(query);
      return res.json(result);
    }

    if (query_front) {
      const [result] = await connection.query(query_front);
      return res.json(result);
    }

    return res.status(400).json({ error: 'header and/or body not sent' })
  }
}