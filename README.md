# pdc-backend

Trata-se de uma API REST que tem a função de se comunicar com o banco de dados através de inserções e consultas e servir esses dados para a aplicação frontend.

A aplicação utiliza do Sequelize para conexão e acesso ao banco de dados, ele nada mais é do que um ORM (Object Relational Mapping), onde as tabelas do banco de dados são definidas através de migrations e classes e não é necessário se preocupar com comandos na linguagem SQL, porém, estes ainda podem ser utilizados.

### Para execução local

#### Instalação de dependências e execução do servidor

**Observação:** é necessário ter o node, npm e yarn instalados na máquina em que este projeto for utilizado.

Clonar o repositório
```
git clone https://github.com/computacao-ufcg/pdc-backend.git
```

Para instalar as dependências necessárias para a execução do projeto, execute em seu terminal o comando:
```
npm install
```
ou
```
yarn add
```

Após isso, para executar o servidor basta usar o comando:
```
npm run dev
```
ou
```
yarn dev
```

#### Scripts para povoamento do banco de dados

Para executar as migrations (arquivos responsáveis pela criação das tabelas no banco de dados) execute o seguinte comando:
```
yarn sequelize db:migrate
```

Para executar os seeds (arquivos responsáveis pela inserção de todos os dados nas tabelas) execute o seguinte comando:
```
yarn sequelize db:seed:all
```

Uma vez que os arquivos de migrations já foram executados e é necessária alguma atualização no schema de determinada(s) tabela(s) é necessário re-executar as migrations com o comandos:
```
yarn sequelize db:migrate:undo:all
```
e logo após
```
yarn sequelize db:migrate
```

Uma vez que os arquivos de seeds já foram executados e é feita alguma atualização nos arquivos que populam o banco, é necessário re-executar os seeds, executando os comandos:
```
yarn sequelize db:seed:undo:all
```
e logo após
```
yarn sequelize db:seed:all
```

#### Arquivos para popular o banco de dados
Os arquivos .csv responsáveis por povoar o banco de dados, devem estar dentro de uma pasta de nome "data" na raiz do projeto. 