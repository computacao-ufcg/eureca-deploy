const connection = require('../database/index');
const Aluno = require('../models/Aluno');

module.exports = {
  async store(req, res) {
    const { 
      cpf,
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
      id_raca
    } = req.body;

    const aluno = await Aluno.create({
      cpf,
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
      id_raca
    });

    return res.json(aluno);
  },

  async show(req, res) {
    const { cpf } = req.params;

    const aluno = await Aluno.findByPk(cpf, {
      include: { association: 'aluno-deficiencias' },
      where: { cpf_aluno: cpf }
    });

    if (!aluno) {
      return res.status(400).json({ error: 'The student does not exist' });
    }

    return res.json(aluno);
  },

  async remove(req, res) {
    const { cpf } = req.params;

    const aluno = await Aluno.findByPk(cpf);

    if (!aluno) {
      return res.status(400).json({ error: 'The student does not exist' });
    }

    return await Aluno.destroy({
      where: { cpf }
    });
  },

  async list(req, res) {
    const { table_name } = req.headers;
    const { query_front } = req.body;

    if (table_name) {
      const query = `SELECT * FROM \"${table_name}\"`
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