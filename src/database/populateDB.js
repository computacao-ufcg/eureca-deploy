const fs = require('fs');

// Função responsável por ler um arquivo .csv e retorná-lo em formato de array
//onde cada item representa uma linha do arquivo.
const readFile = (file) => {
  const data = fs.readFileSync(file, {
    encoding: 'utf8',
    flag: 'r'
  });

  const generosSplitted = data.split('\n')
  generosSplitted.splice(generosSplitted.length - 1)

  return generosSplitted;
}

// Função responsável por preparar os dados de tabelas que possuem apenas um
//um atributo "nome" (exceto o id) para inserção no banco de dados.
const buildNomes = (nomes) => {
  const dados = [];
  for (let i = 0; i < nomes.length; i++) {
    dados.push({
      nome: nomes[i]
    });
  }
  return dados;
}

// Função responsável por preparar os dados de naturalidade para inserção no banco de dados.
const buildNaturalidades = (municipios) => {
  const dados = [];
  for (let i = 0; i < municipios.length; i++) {
    const tokens_municipio = municipios[i].split(';');
    dados.push({
      municipio: tokens_municipio[0],
      estado: tokens_municipio[1],
    });
  }
  return dados;
}

// Função responsável por preparar os dados de tabelas (que possuem apenas o campo
//"descricao" como colunas (exceto o id)) para inserção no banco de dados.
const buildDescricao = descricoes => {
  const dados = [];
  for (let i = 0; i < descricoes.length; i++) {
    dados.push({
      descricao: descricoes[i]
    });
  }
  return dados;
}

// Função responsável por preparar os dados dos discentes para inserção no banco de dados.
const buildDiscentes = (alunos) => {
  const dados = [];
  for (let i = 0; i < alunos.length; i++) {
    const tokens_aluno = alunos[i].split(';');
    dados.push({
      cpf: tokens_aluno[0],
      nome: tokens_aluno[1],
      id_situacao: Number(tokens_aluno[2]),
      semestre_situacao: tokens_aluno[3],
      id_ingresso: Number(tokens_aluno[4]),
      semestre_ingresso: tokens_aluno[5],
      ano_nascimento: Number(tokens_aluno[6]),
      id_cota: Number(tokens_aluno[7]),
      id_tipo_escola: Number(tokens_aluno[8]),
      ano_conclusao_ensino_medio: Number(tokens_aluno[9]),
      email: tokens_aluno[10],
      id_genero: Number(tokens_aluno[11]),
      id_estado_civil: Number(tokens_aluno[12]),
      id_nacionalidade: Number(tokens_aluno[13]),
      id_pais_origem: Number(tokens_aluno[14]),
      id_naturalidade: Number(tokens_aluno[15]),
      id_cor: Number(tokens_aluno[16])
    });
  }
  return dados;
}

// Função responsável por preparar os dados do relacionamento entre discente e 
//deficiências para inserção no banco de dados.
const buildDiscentesDeficiencias = (aluno_deficiencias) => {
  const dados = [];
  for (let i = 0; i < aluno_deficiencias.length; i++) {
    const tokens_aluno = aluno_deficiencias[i].split(';');
    dados.push({
      cpf: tokens_aluno[0],
      id_deficiencia: Number(tokens_aluno[1]),
    });
  }
  return dados;
}

// Função responsável por preparar os dados de vínculos de discentes para 
//inserção no banco de dados.
const buildDiscentesVinculos = (aluno_vinculos) => {
  const dados = [];
  for (let i = 0; i < aluno_vinculos.length; i++) {
    const tokens_aluno = aluno_vinculos[i].split(';');
    dados.push({
      cpf: tokens_aluno[0],
      matricula: tokens_aluno[1],
      id_curso: Number(tokens_aluno[2]),
      id_situacao_vinculo: Number(tokens_aluno[3]),
      semestre_vinculo: tokens_aluno[4],
    });
  }
  return dados;
}

module.exports = { 
  readFile,
  buildDescricao,
  buildDiscentes,
  buildDiscentesDeficiencias,
  buildDiscentesVinculos,
  buildNaturalidades,
  buildNomes,
}