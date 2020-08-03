const connection = require('../database/index');

module.exports = {

  // Função para listagem do modelo (SELECT * FROM ...) para todas as tabelas a partir
  //do frontend.
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

    return res.status(400).json({ error: 'header and/or body was not sent.' })
  }
}