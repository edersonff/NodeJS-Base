<p align="center" style="padding: 5%" >
  <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" width="200px" title="NodeJS">
</p>

# Base NodeJs 🧱

<a name="readme-top"></a>

<details>
  <summary>Súmario</summary>
  <ol>
    <li>
      <a href="#introdução">Introdução</a>
    </li>
    <li>
      <a href="#como-rodar-o-projeto">Como rodar o projeto</a>
      <ul>
        <li><a href="#env-📄">.ENV</a></li>
        <li><a href="#dev-🧑‍💻️">Dev</a></li>
        <li><a href="#buildar-🧱">Buildar</a></li>
        <li><a href="#produção-🎥">Produção</a></li>
        <li><a href="#docker-🐳">Docker</a></li>
      </ul>
    </li>
    <li>
      <a href="#linha-de-raciocinio">Linha de raciocinio</a>
      <ul>
        <li><a href="#pacotes-📦">Pacotes</a></li>
        <li><a href="#pacotes-dev-💻">Pacotes DEV</a></li>
      </ul>
    </li>
  </ol>
</details>

## **Introdução**

Base para rodar projetos em ``NodeJS`` e ``Express``

## **Como rodar o projeto**

### ENV 📄

```
PORT=3000 # -> Porta que a aplicação irá rodar

DATABASE_URL=node-challenge # -> URL do mongoDB que irá utilizar

LOG_LEVEL=debug # -> Nível de log do Winston (debug, info, warn, error)

DEBUG=true # -> Se está fazendo debug

LOGS=true -> # Para ativar ou desativar parte dos logs
```

### Dev 🧑‍💻️

1. Abra um terminal na pasta do projeto e digite: `yarn install` caso utilize yarn, se não `npm i`
2. Digite `yarn prepare` ou `npm run prepare` para utilizar o Husky
3. Copie o .env e certifique-se de configurar as váriaveis para o seu ambiente
4. Digite `npx prisma generate` para utilizar preparar o Prisma
5. E por fim para rodar o projeto utilize `yarn dev` ou `npm run dev`

### Buildar 🧱

1. Verifique se os pacotes estão instalados utilizando os comando `yarn install` ou também `npm i`
2. Utilize `npm run build` para buildar a aplicação
3. Digite `npx prisma generate` para utilizar preparar o Prisma
4. E por fim mas não menos importante `npm run start` para rodar a aplicação

### Produção 🎥

1. Após já ter gerado a build, que pode ser confirmado se a pasta `/build` existe, digite o comando `npm start` </br>
   _obs: configurar o .env para prod, seguir o exemplo do arquivo prod.env_

### Docker 🐳

1. Altere o arquivo `DockerFile` os campos `WORKDIR` e `COPY` para o diretorio do projeto e a porta no comando expose, como no exemplo:

```
FROM node:16-alpine
WORKDIR /usr/desafio # <--
COPY . /usr/desafio # <--
EXPOSE 8080 # <--
```

2. Builde o app com o comando `docker build -t {nome} .`
3. Rode o comando `docker run --publish 8080:8080 {nome}` para iniciar a imagem já pronta

---

## **Linha de raciocinio**

### Pacotes 📦

- **@prisma/client**: ORM utilizada para substituir a typeorm
- **body-parser**: Middleware para poder manipular o corpo da requisição(req.body).
- **dotenv**: Configurar informações locais.
- **express**: Framework utilizado para construção da API.
- **helmet**: Configurar os Headers da requisição.
- **joi**: Schemas para NodeJS.
- **moment**: Para formatação de datas-horários
- **mongodb**: Modulo nativo do MongoDB
- **node-cron**: Utilizado para agendar tarefas.
- **swagger-autogen**: Gerar automaticamente arquivo swagger configurado com as rotas.
- **swagger-ui-express**: Exbir Swagger com express
- ~~**sqlite3**: Banco utilizado nesse projeto.
  Seria mais uma forma de facilidade para testes, ideia futura é criar uma branch com configurações de outros bancos como exemplo.~~
- ~~**typeorm**: Orm que foi utilizada no projeto.
  Não sou tão familiarizado com essa ORM(apenas em projetos nestJS), por isso decidi utiliza-ló aqui.~~
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
- **ts-jest**: Rodar os testes em Typescript
- **ts-node**: Rodar o projeto em Typescript
- **typescript**: Pactoe para a linguagem Typescript