# Projeto Banco de Curriculos JobsNET

Neste repositório você encontra todos os arquivos relacionados ao projeto de Banco de Currículos JobsNET da Gama Academy em parceria com a Ambev Tech.
Os arquivos estão divididos em duas vertentes: **front** e **back**

O *frontend* foi desenvolvido em *React* e se encontra na pasta **front** deste repositório. Para simular o ambiente em sua máquina basta fazer o clone e seguir os passos do README que está presente na pasta **front**.

O *backend* foi desenvolvido em *Nodejs* utilizando o banco de dados *Postgresql*. Para simular o ambiente em sua máquina basta fazer o clone e seguir os passos do README que está presente na pasta **back**.

## Exigências do projeto

 :heavy_check_mark: Apresentar a estrutura do projeto no github;\
 :heavy_check_mark: Landing page com formulário para preenchimento de candidatura;\
 :heavy_check_mark: Cadastro de candidatos com os campos: Id, Nome, Data Nascimento, Endereço {cep, logradouro, numero, bairro, cidade e estado}, Telefone, Email e Profissão e demais campos mencionados na imagem de ilustração de formulário de candidatos;\
 :heavy_check_mark: consultar o endereço pelo CEP informado (Consultar a API VIA Cep);\
 :heavy_check_mark: **NOTA: O sistema deverá utilizar de algum client API para buscar um endereço do serviço via cep conforme link:  [](https://viacep.com.br/ws/%7BSEU_CEP%7D/json/)[https://viacep.com.br/ws/{SEU_CEP}/json/](https://viacep.com.br/ws/%7BSEU_CEP%7D/json/)**\
 :heavy_check_mark: Não pode haver 2 cadastros de candidatos com o mesmo cpf;\
 :heavy_check_mark: Todo candidato precisará preencher os campos: CPF, Nome, Data Nascimento, Cep, Logradouro, Número, Bairro, Cidade, Email, Cargo Pretendido e Celular;\
 :heavy_check_mark: Disponibilizar uma API Rest com a funcionalidade de cadastro de candidatos armazenando em um banco de dados;\
 :heavy_check_mark: Disponibilizar a documentação dos recursos Web Services REST - Uso do Swagger;
 
## Deploy Front

O deploy do frontend foi feito no **Netlify**.
Para acessar a aplicação web basta acessar [https://upbeat-kilby-b118a9.netlify.app/](https://upbeat-kilby-b118a9.netlify.app/)
Nesta página será possível realizar o cadastro de um candidato. Na navegação existe um link *Buscar Candidato* que levará o usuário para uma página de consulta de candidato por CPF.
Desta forma, o usuário consegue realizar o cadastro e buscar pelo CPF cadastrado.

## Deploy Backend

O deploy do backend foi feito no **Heroku**.
O banco de dados utilizado foi o *Postgresql*.
A url da API que está sendo consultada pelo frontend é [https://gamajobsnet.herokuapp.com/](https://gamajobsnet.herokuapp.com/)


## Swagger

A documentação da API foi desenvolvida com **Swagger** está disponível através do link [https://gamajobsnet.herokuapp.com/api-docs/](https://gamajobsnet.herokuapp.com/api-docs/)
Nela, estão listados os dois endpoints do projeto. Um para cadastro de candidatos e outro para consulta de candidato por CPF cadastrado.
