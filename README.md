# pdc-backend

Trata-se de um serviço que tem a função de prover a infraestrutura de banco de dados. Aqui o banco de dados é criado, tabelas e relacionamentos são definidos e, por fim é populado com os dados, então esse banco de dados é disponibilizado para que uma api possa acessá-lo.

A aplicação utiliza do Sequelize para conexão e acesso ao banco de dados, ele nada mais é do que um ORM (Object Relational Mapping), onde as tabelas do banco de dados são definidas através de migrations e classes e não é necessário se preocupar com comandos na linguagem SQL, porém, estes ainda podem ser utilizados.

### Configurações do docker e postgreSQL

Antes de tudo, é necessário ter o docker e o postgres instalados na máquina virtual, e também na máquina do usuário caso o mesmo deseje testar localmente. 

Para instalar o docker em distribuições linux ubuntu, siga [aqui](https://docs.docker.com/engine/install/ubuntu/).

Para instalar o postgres (também no ubuntu) em sua versão mais recente, basta seguir este [gist](). 

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

**Obs:** A senha de acesso ao banco de dados é a mesma que será usada para subir o contêiner.
```
docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d  -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
```

Para verificar se o contêiner está em execução, basta executar o comando ```docker ps``` para visualizar a imagem ```postgres``` em execução.

- Usar o cliente nativo (psql) para conectar ao postgres via docker, **(a senha a ser inserida é a mesma usada para subir o contêiner)**
```
psql -h localhost -U postgres
```

Após isso, o usuário estará na interface de linha de comando do postgres, para voltar ao shell basta digitar "\q" ou "exit" e teclar Enter.

### Para testes em ambiente de desenvolvimento

**Obs:** É necessário ter o node e o yarn instalados na máquina em que o projeto for executado, para instalar o node e o yarn siga o seguinte [gist](), no momento é preciso instalar apenas na máquina em que o repositório será clonado, já que os comandos serão executados no banco de dados da Máquina Virtual, e posteriormente tudo funcionará a partir de contêineres, eliminando essa necessidade de ter várias ferramentas instaladas localmente.

Clonar o repositório
```
git clone https://github.com/computacao-ufcg/pdc-deploy.git
```

Entrar no repositório
```
cd pdc-deploy
```

Para instalar as dependências necessárias para a execução do projeto, execute em seu terminal o comando:
```
npm install
```

### Arquivos para popular o banco de dados
Os arquivos de extensões **.data** responsáveis por povoar o banco de dados, arquivos estes que se encontram [aqui](https://drive.google.com/drive/u/1/folders/1o2DjGcPzf9wjGLZjmhIFK62DLl5suPW9){:target="_blank" rel="noopener"}, devem estar dentro de uma pasta de nome "data" na raiz do projeto cujos nomes dos arquivos devem seguir o seguinte [padrão](https://github.com/computacao-ufcg/pdc-coleta-de-dados/tree/master/tables){:target="_blank" rel="noopener"}.


### Variáveis de ambiente
O arquivo .env que está localizado na raiz do projeto contém as variáveis de ambiente que
são utilizadas para a conexão com o banco de dados. 
As variáveis **DB_HOST** e **DB_NAME** devem ser alteradas dependendo do ambiente em que o usuário estiver executando, se for em produção o **DB_HOST** deve ser o IP da máquina virtual em que o banco será hospedado. Caso seja em desenvolvimento o **DB_HOST** deve ser __localhost__. Já o **DB_NAME** em produção será **bd_painel_de_controle** e em desenvolvimento será **bd_development**.

### Criação do banco de dados

Após configurar as variáveis de ambiente, é necessário estabelecer a conexão com o banco de dados e criar o banco de dados de acordo com as configurações do arquivo database.js que utiliza dos valores das variáveis de ambiente.
```
yarn sequelize db:create
```

**Obs:** Ao executar esse comando não deve existir nenhuma conexão paralela ao banco de dados (conexão esta que pode ser pelo terminal no psql ou em algum interface gráfica de conexão ao banco de dados), caso contrário ocorrerá um erro e não será possível criar o banco de dados com o DB_NAME especificado no arquivo .env. Após a execução bem sucedida do comando pode conectar normalmente a partir de qualquer uma das formas mencionadas.

### Scripts para povoamento do banco de dados

Para executar as migrations (arquivos responsáveis pela criação das tabelas no banco de dados) execute o seguinte comando:
```
yarn sequelize db:migrate
```

Para executar os seeds (arquivos responsáveis pela inserção de todos os dados nas tabelas) execute o seguinte comando:
```
yarn sequelize db:seed:all
```

### Comandos alternativos

__Os comandos abaixo são para o caso de alguma alteração no esquema das tabelas (migrations) ou dos arquivos de inserção (seeds). O usuário pode utilizá-los para desfazer as alterações e depois executar novamente os comandos acima mencionados para executá-las novamente.__

Uma vez que os arquivos de migrations já foram executados e é necessária alguma atualização no schema de determinada(s) tabela(s) é necessário remover as tabelas com o comando:
```
yarn sequelize db:migrate:undo:all
```

Uma vez que os arquivos de seeds já foram executados e é feita alguma atualização nos arquivos que populam o banco, é necessário remover os seeds executados, executando o comando:
```
yarn sequelize db:seed:undo:all
```