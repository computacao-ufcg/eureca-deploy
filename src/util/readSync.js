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

// Função responsável por preparar os dados de cotas para inserção no banco de dados.
const buildCotas = cotas => {
  const dados = [];
  for (let i = 0; i < cotas.length; i++) {
    dados.push({
      descricao_cota: cotas[i]
    });
  }
  return dados;
}

// Função responsável por preparar os dados de deficiências para inserção no banco de dados.
const buildDeficiencias = deficiencias => {
  const dados = [];
  for (let i = 0; i < deficiencias.length; i++) {
    dados.push({
      descricao_deficiencia: deficiencias[i]
    });
  }
  return dados;
}

// Função responsável por preparar os dados de escolas para inserção no banco de dados.
const buildEscolas = escolas => {
  const dados = [];
  for (let i = 0; i < escolas.length; i++) {
    dados.push({
      tipo_escola: escolas[i]
    });
  }
  return dados;
}

// Função responsável por preparar os dados de estados civis para inserção no banco de dados.
const buildEstadosCivis = estados_civis => {
  const dados = [];
  for (let i = 0; i < estados_civis.length; i++) {
    dados.push({
      estado_civil: estados_civis[i]
    });
  }
  return dados;
}

// Função responsável por preparar os dados de gêneros para inserção no banco de dados.
const buildGeneros = generos => {
  const dados = [];
  for (let i = 0; i < generos.length; i++) {
    dados.push({
      genero: generos[i]
    });
  }
  return dados;
}

// Função responsável por preparar os dados de ingresso para inserção no banco de dados.
const buildIngressos = ingressos => {
  const dados = [];
  for (let i = 0; i < ingressos.length; i++) {
    dados.push({
      descricao_ingresso: ingressos[i]
    });
  }
  return dados;
}

// Função responsável por preparar os dados de munícipios para inserção no banco de dados.
const buildMunicipios = (municipios) => {
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

// Função responsável por preparar os dados de nacionalidades para inserção no banco de dados.
const buildNacionalidades = nacionalidades => {
  const dados = [];
  for (let i = 0; i < nacionalidades.length; i++) {
    dados.push({
      nacionalidade: nacionalidades[i]
    });
  }
  return dados;
}

// Função responsável por preparar os dados de países de origem para inserção no banco de dados.
const buildPaisOrigem = paises => {
  const dados = [];
  for (let i = 0; i < paises.length; i++) {
    dados.push({
      país_origem: paises[i]
    });
  }
  return dados;
}

// Função responsável por preparar os dados de situação do aluno ou situação do
//vínculo para inserção no banco de dados.
const buildSituacao = situacao => {
  const dados = [];
  for (let i = 0; i < situacao.length; i++) {
    dados.push({
      descricao_situacao: situacao[i]
    });
  }
  return dados;
}

// Função responsável por preparar os dados de raças para inserção no banco de dados.
const buildRacas = racas => {
  const dados = [];
  for (let i = 0; i < racas.length; i++) {
    dados.push({
      raça: racas[i]
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
      codigo_deficiencia: Number(tokens_aluno[1]),
    });
  }
  return dados;
}

// Função responsável por preparar os dados de vínculos de alunos para inserção no banco de dados.
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
  buildCotas,
  buildDeficiencias,
  buildEscolas,
  buildEstadosCivis,
  buildGeneros,
  buildIngressos,
  buildMunicipios,
  buildNacionalidades,
  buildPaisOrigem,
  buildRacas,
  buildSituacao,
  buildAlunos,
  buildAlunoDeficiencias,
  buildAlunoVinculos,
}