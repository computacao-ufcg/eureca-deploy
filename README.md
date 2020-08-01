# pdc-backend

Trata-se de uma API REST que tem a função de se comunicar com o banco de dados através de inserções e consultas e servir esses dados para a aplicação frontend.

A aplicação utiliza do Sequelize para conexão e acesso ao banco de dados, ele nada mais é do que um ORM (Object Relational Mapping), onde as tabelas do banco de dados são definidas através de migrations e classes e não é necessário se preocupar com comandos na linguagem SQL, porém, estes ainda podem ser utilizados.

### Configurações do docker e postgreSQL

Antes de tudo, é necessário ter o docker e o postgres instalados. 

Para instalar o docker em distribuições linux ubuntu, siga [aqui](https://docs.docker.com/engine/install/ubuntu/).

Para instalar o postgres (também no ubuntu) em sua versão 10, basta seguir o [gist](https://gist.github.com/paulojuniore/722a2d46814363f85ae526e800f2303d). 

- Com o docker instalado, é necessário adicionar o seu user ao grupo de usuários do docker, usando o seguinte comando e depois reiniciar a máquina.
```
sudo usermod -aG docker $USER
```

- Baixar a imagem do postgres no docker
```
docker pull postgres
```
- Criar um volume para o postgres em sua máquina
```
mkdir -p $HOME/docker/volumes/postgres
```
- Parando execução do postgres local, para utilizá-lo a partir de um container docker
```
sudo service postgresql stop
```
- Executando o container a partir do volume criado anteriormente
```
docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d  -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
```
- Usar o cliente nativo (psql) para conectar ao postgres via docker
```
psql -h localhost -U postgres
```
Para verificar se o contêiner está em execução, basta executar o comando ```docker ps``` para visualizar os contêineres em execução.

### Configurações do repositório

#### Importação e execução de contêiner da API

Baixar a imagem da api no dockerhub
```
docker pull paulojuniore/pdc-cc-api:latest
```

Para colocar o contêiner em execução, basta executar
```
docker run -it -d -p 3333:3333 paulojuniore/pdc-cc-api:latest
```

### Para testes em ambiente de desenvolvimento

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

E logo após, criar a conexão com o contêiner docker de acordo com as credenciais do arquivo **.env** na raiz do projeto, com o comando.
```
yarn sequelize db:create
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

### Arquivos para popular o banco de dados
Os arquivos .data responsáveis por povoar o banco de dados, arquivos estes que se encontram [aqui](https://drive.google.com/drive/u/1/folders/1o2DjGcPzf9wjGLZjmhIFK62DLl5suPW9), devem estar dentro de uma pasta de nome "data" na raiz do projeto cujos nomes dos arquivos devem seguir o seguinte [padrão](https://github.com/computacao-ufcg/pdc-coleta-de-dados/tree/master/tables). 