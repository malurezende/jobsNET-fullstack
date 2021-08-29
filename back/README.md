# Projeto Banco de Curriculos JobsNET (Backend)

Neste repositório você encontra todos os arquivos relacionados ao **backend** do projeto de Banco de Currículos JobsNET da Gama Academy em parceria com a Ambev Tech.

## Como simular o projeto localmente

Para que o backend rode em sua máquina, será necessário subir um banco de dados *Postgresql* localmente.
Aconselho a utilização do *Docker*.

Para maiores informações sobre como executar este processo, acesse o link [https://hub.docker.com/_/postgres](https://hub.docker.com/_/postgres).\

Assim que o banco estiver **ok**, você precisará criar um arquivo chamado **ormconfig.json** na raíz do projeto, seguindo os moldes do arquivo de referência **ormconfig.ref.json**.

    "host": "colocar seu host aqui... geralmente 'localhost'",
    "port": "colocar a porta do banco aqui... para o postgresql geralmente se usa 5432,
    "username": "colocar o usuário do banco",
    "password": "colocar o password do banco",
    "database": "colocar o nome do banco"
     
O próximo comando instala as dependências necessárias utilizadas no projeto.
A pasta node_modules será criada.

    yarn

Feito esta configuração você está pronto para executar as migrations.
Para isso, execute:

    yarn typeorm migration:run

Se tudo correu bem, você poderá executar os próximos comandos:

     yarn dev:server

Inicia o servidor na porta 3333 do seu ambiente local.
Agora você está pronto para realizar as chamadas para as rotas configuradas.

    yarn build

Builda o app para produção na pasta `dist`.\
Isto empacota os arquivos para produção e otimiza a build para obter a melhor performance.

Seu app está pronto para ser deployado.
