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

// Função responsável por preparar os dados de cursos para inserção no banco de dados.
const buildCursos = (cursos) => {
  const dados = [];
  for (let i = 0; i < cursos.length; i++) {
    dados.push({
      nome_curso: cursos[i]
    });
  }
  return dados;
}

// Função responsável por preparar os dados de munícipios para inserção no banco de dados.
const buildMunicipios = (municipios) => {
  const dados = [];
  for (let i = 0; i < municipios.length; i++) {
    const tokens_municipio = municipios[i].split(';');
    if (tokens_municipio[0].length > 30) {
      console.log('ERROR');
    }
    dados.push({
      municipio: tokens_municipio[0],
      estado: tokens_municipio[1],
    });
  }
  return dados;
}

// Função responsável por preparar os dados de alunos para inserção no banco de dados.
const buildAlunos = (alunos) => {
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
      id_raca: Number(tokens_aluno[16])
    });
  }
  return dados;
}

// Função responsável por preparar os dados do relacionamento entre aluno e deficiências para inserção no banco de dados.
const buildAlunoDeficiencias = (aluno_deficiencias) => {
  const dados = [];
  for (let i = 0; i < aluno_deficiencias.length; i++) {
    const tokens_aluno = aluno_deficiencias[i].split(';');
    dados.push({
      cpf_aluno: tokens_aluno[0],
      codigo_deficiencia: tokens_aluno[1],
    });
  }
  return dados;
}

// Função responsável por preparar os dados de munícipios para inserção no banco de dados.
const buildAlunoVinculos = (aluno_vinculos) => {
  const dados = [];
  for (let i = 0; i < aluno_vinculos.length; i++) {
    const tokens_aluno = aluno_vinculos[i].split(';');
    dados.push({
      cpf: tokens_aluno[0],
      matricula_vinculo: tokens_aluno[1],
      id_curso: Number(tokens_aluno[2]),
      id_situacao_vinculo: Number(tokens_aluno[3]),
      periodo_evasao: tokens_aluno[4],
    });
  }
  return dados;
}

module.exports = { 
  readFile,
  buildCursos,
  buildMunicipios,
  buildAlunos,
  buildAlunoDeficiencias,
  buildAlunoVinculos,
}