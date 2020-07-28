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

// Função responsável por preparar os dados de disciplinas para inserção no banco de dados.
const buildDisciplinas = disciplinas => {
  const dados = [];
  for (let i = 0; i < disciplinas.length; i++) {
    const tokens_disciplina = disciplinas[i].split(';');
    dados.push({
      codigo: tokens_disciplina[0],
      creditos: tokens_disciplina[1],
      horas: tokens_disciplina[2],
      nome: tokens_disciplina[3],
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

// Função responsável por preparar os dados de professores para inserção no banco de dados.
const buildProfessores = (professores) => {
  const dados = [];
  for (let i = 0; i < professores.length; i++) {
    dados.push({
      siape: professores[i]
    });
  }
  return dados;
}

// Função responsável por preparar os dados de turmas para inserção no banco de dados.
const buildTurmas = (turmas) => {
  const dados = [];
  for (let i = 0; i < turmas.length; i++) {
    const tokens_turmas = turmas[i].split(';');
    dados.push({
      id_disciplina: Number(tokens_turmas[0]),
      turma: Number(tokens_turmas[1]),
      periodo: tokens_turmas[2],
      id_horario: Number(tokens_turmas[3]),
      id_sala: Number(tokens_turmas[4]),
    });
  }
  return dados;
}

// Função responsável por preparar os dados do relacionamento entre turma e professores para
//inserção no banco de dados.
const buildTurmaProfessores = (turmas_professores) => {
  const dados = [];
  for (let i = 0; i < turmas_professores.length; i++) {
    const tokens_turmas_professores = turmas_professores[i].split(';');
    dados.push({
      id_turma: Number(tokens_turmas_professores[0]),
      siape: tokens_turmas_professores[1],
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

// Função responsável por preparar os dados do relacionamento entre discente e 
//disciplinas para inserção no banco de dados.
const buildDiscenteDisciplinas = (aluno_disciplinas) => {
  const dados = [];
  for (let i = 0; i < aluno_disciplinas.length; i++) {
    const tokens_aluno_disciplinas = aluno_disciplinas[i].split(';');
    dados.push({
      matricula: tokens_aluno_disciplinas[0],
      id_turma: Number(tokens_aluno_disciplinas[1]),
      num_faltas: Number(tokens_aluno_disciplinas[2]),
      nota1: tokens_aluno_disciplinas[3],
      nota2: tokens_aluno_disciplinas[4],
      nota3: tokens_aluno_disciplinas[5],
      nota4: tokens_aluno_disciplinas[6],
      nota5: tokens_aluno_disciplinas[7],
      nota6: tokens_aluno_disciplinas[8],
      nota7: tokens_aluno_disciplinas[9],
      nota8: tokens_aluno_disciplinas[10],
      media_parcial: tokens_aluno_disciplinas[11],
      prova_final: tokens_aluno_disciplinas[12],
      media_final: tokens_aluno_disciplinas[13],
      id_situacao: Number(tokens_aluno_disciplinas[14]),
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

// Função responsável por preparar os dados de faltas para inserção no banco de dados.
const buildFaltas = (faltas) => {
  const dados = [];
  for (let i = 0; i < faltas.length; i++) {
    const tokens_faltas = faltas[i].split(';');
    dados.push({
      matricula: tokens_faltas[0],
      id_turma: Number(tokens_faltas[1]),
      num_aula: Number(tokens_faltas[2]),
    });
  }
  return dados;
}

module.exports = { 
  readFile,
  buildDescricao,
  buildDisciplinas,
  buildNaturalidades,
  buildNomes,
  buildProfessores,
  buildTurmas,
  buildTurmaProfessores,
  buildDiscentes,
  buildDiscentesDeficiencias,
  buildDiscenteDisciplinas,
  buildDiscentesVinculos,
  buildFaltas,
}