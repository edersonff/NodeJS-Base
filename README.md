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
- **nodemon**: Utilizado para fazer o reload do projeto quando alterado
- **prettier**: Formatação e organização de código
- **rimraf**: Para fazer a build do projeto typescript
- **supertest**: Para ser utilizado juntamente om o Jest
- **ts-node**: Rodar o projeto em Typescript
- **typescript**: Pactoe para a linguagem Typescript

### Roadmap _ou_ Organização ☑️

- [✖️] Configuração inicial express
- [✖️] Configuração inicial typeorm
- [✖️] Configuração Winston e Logs
- [✖️] Configuração Typescript(💙)
- [✖️] Configuração .env
- [✖️] Criação de Entidade/Model Product
- [✖️] Criação inicial das rotas principais
- [✖️] Criação dos controllers principais(2)
- [⬛] Criar tipos para entrada e saida das rotas (opcional)
- [⬛] Alinhar projeto com documentação do Open Food Facts
- [⬛] Importação de dados apartir da rota
- [⬛] Descompatar e ler os arquivos limitando-os
- [⬛] Sistema de falha do sync dos produtos (opcional)
- [⬛] Criação dos testes automatizados (opcional)
- [⬛] Utilização de Forms/Schemas
- [⬛] Criação de Middlewares para tratar informações
- [⬛] Criação de Parte Front-end -> Possibilidade de utilizar NextJS (opcional)
- [⬛] Configuração do Docker (opcional)
- [⬛] Documentação da api a partir do conceito Open API 3.0 (opcional)
- [⬛] Testar fluxo para ver se está tudo certo 😋

### Ideias _ou_ Hipóteses

Tive alguns problemas pequenos para configurar Typescript no projeto inicialmente <br/>
Estou com a ideia de utilizar .sqlite por questão de praticidade <br/>
Utilizar o pacote dotenv para configurar as váriaveis de ambiente do projeto <br/>
Alguns problemas para achar o folder correto do sqlite e dos logs mas foi tranquilo arrumar <br/>
Tive alguns problemas para conectar o TypeORM mas agora está tudo funcionando <br/>
Principalmente pelo formato do arquivo(.gz) imagino que precise ser descompactado e depois lido, por agora imagino que precisariamos utilizar a url https://challenges.coode.sh/food/data/json/{code} para os arquivos, não gostaria também de utilizar o arquivo index.txt dinamicamente(desnecessario para esse projeto). <br/>
Estou tentando adiantar grande parte do projeto o quanto antes para não ter problemas com os adicionais(que eu gostaria de fazer)<br/>

<p align="right">(<a href="#readme-top">Subir</a>)</p>
