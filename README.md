# Desafio NodeJs Open Food Facts 🍕

<a name="readme-top"></a>

<details>
  <summary>Súmario</summary>
  <ol>
    <li>
      <a href="#introdução">Introdução</a>
    </li>
    <li>
      <a href="#linha-de-raciocinio">Linha de raciocinio</a>
      <ul>
        <li><a href="#pacotes-📦">Pacotes</a></li>
        <li><a href="#pacotes-dev-💻">Pacotes DEV</a></li>
        <li><a href="#roadmap-ou-organização-☑️">Roadmap -> Organização</a></li>
      </ul>
    </li>
  </ol>
</details>

## Introdução

Desafio proposto pela **Coodesh** como desafio do da empresa Grupo fácil(Tech Challenge) para criação de uma API RESTFul no qual utiliza dados e informações do projeto **Open Food Facts**.

## Linha de raciocinio

### Pacotes 📦

- **body-parser**: Middleware para poder manipular o corpo da requisição(req.body).
- **dotenv**: Configurar informações locais.
- **express**: Framework utilizado para construção da API.
- **helmet**: Configurar os Headers da requisição.
- **joi**: Schemas para NodeJS.
- **node-cron**: Utilizado para agendar tarefas.
- **sqlite3**: Banco utilizado nesse projeto.
  Seria mais uma forma de facilidade para testes, ideia futura é criar uma branch com configurações de outros bancos como exemplo.
- **typeorm**: Orm que foi utilizada no projeto.
  Não sou tão familiarizado com essa ORM(apenas em projetos nestJS), por isso decidi utiliza-ló aqui.
- **winston**: Utilizado para controle de Logs.
  Não 100% necessário para o projeto, mas útil.

### Pacotes **DEV** 💻

- **commitizen**: Comando CLI que facilita commits convencionais.
  Não totalmente necessario para o projeto, mais como uma facilidade.
- **eslint**: Utilizado para formatação do código do projeto.
- **husky**: Maior usabilidade do Commits/GIT.
  Utilizado principalmente para avisar código mal formatado
- **helmet**: Configurar os Headers da requisição
- **jest**: Pacote utilizado para testes
- **node-cron**: Utilizado para agendar tarefas
- **sqlite3**: Banco utilizado nesse projeto. </br>
  Seria mais uma forma de facilidade para testes, ideia futura é criar uma branch com configurações de outros bancos como exemplo
- **typeorm**: Orm que foi utilizada no projeto.
  Não sou tão familiarizado com essa ORM(apenas em projetos nestJS), por isso decidi utiliza-ló aqui.
- **winston**: Utilizado para controle de Logs.
  Não 100% necessário para o projeto, mas útil

### Roadmap _ou_ Organização ☑️

- [✖️] Configuração inicial express
- [✖️] Configuração inicial typeorm
- [✖️] Configuração Winston e Logs
- [✖️] Configuração Typescript(💙)
- [✖️] Configuração .env
- [✖️] Criação de Entidade/Model Product
- [✖️] Criação inicial das rotas principais
- [⬛] Criação dos controllers principais(2)
- [⬛] Criar tipos para entrada e saida das rotas
- [⬛] Alinhar projeto com documentação do Open Food Facts
- [⬛] Importação de dados apartir da API
- [⬛] Criação dos testes automatizados
- [⬛] Utilização de Forms/Schemas
- [⬛] Criação de Middlewares para tratar informações
- [⬛] Criação de Parte Front-end -> Possibilidade de utilizar NextJS

<p align="right">(<a href="#readme-top">Subir</a>)</p>
