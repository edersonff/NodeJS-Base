<p align="center" style="padding: 5%" >
  <img src="https://hipsters.jobs/files/pictures/Coodesh-Logo-Vertical.png" width="200px" title="hover text">
</p>

# Desafio NodeJs Open Food Facts 🍕

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
      </ul>
    </li>
    <li>
      <a href="#linha-de-raciocinio">Linha de raciocinio</a>
      <ul>
        <li><a href="#pacotes-📦">Pacotes</a></li>
        <li><a href="#pacotes-dev-💻">Pacotes DEV</a></li>
        <li><a href="#roadmap-ou-organização-☑️">Roadmap -> Organização</a></li>
        <li><a href="#ideias-ou-hipóteses">Ideias ou Hipóteses</a></li>
        <li><a href="#off-topic">Off topic</a></li>
      </ul>
    </li>
  </ol>
</details>

## **Introdução**

Desafio proposto pela **Coodesh** como desafio do da empresa Grupo fácil(Tech Challenge) para criação de uma API RESTFul no qual utiliza dados e informações do projeto **Open Food Facts**.

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
4. E por fim para rodar o projeto utilize `yarn dev` ou `npm run dev`

### Buildar 🧱

1. Verifique se os pacotes estão instalados utilizando os comando `yarn install` ou também `npm i`
2. Utilize `npm run build` para buildar a aplicação
3. E por fim mas não menos importante `npm run start` para rodar a aplicação

### Produção 🎥

1. Após já ter gerado a build, que pode ser confirmado se a pasta `/build` existe, digite o comando `npm start` </br>
_obs: configurar o .env para prod, seguir o exemplo do arquivo prod.env_ 

___
## **Linha de raciocinio**

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

___
### **Roadmap _ou_ Organização ☑️**

- [✖️] Configuração inicial express
- [✖️] Configuração inicial typeorm
- [✖️] Configuração Winston e Logs
- [✖️] Configuração Typescript(💙)
- [✖️] Configuração .env
- [✖️] Criação de Entidade/Model Product
- [✖️] Criação inicial das rotas principais
- [✖️] Criação dos controllers principais(2)
- [⬛] Criar tipos para entrada e saida das rotas (opcional)
- [⬛] ~~Configurar banco MongoDB com TypeORM~~
- [✖️] Configurar banco MongoDB com Prisma
- [⬛] Alinhar projeto com documentação do Open Food Facts
- [✖️] Importação de dados apartir da rota
- [✖️] Descompatar e ler os arquivos limitando-os
- [✖️] Sistema de falha do sync dos produtos (opcional)
- [⬛] Criação dos testes unitarios (opcional)
- [✖️] Utilização de Forms/Schemas
- [✖️] Criação de Middlewares para tratar informações
- [⬛] Criação de Parte Front-end -> Possibilidade de utilizar ~~NextJS~~ ReactJS (opcional)
- [⬛] Configuração do Docker (opcional)
- [⬛] Documentação da api a partir do conceito Open API 3.0 (opcional)
- [⬛] Testar fluxo para ver se está tudo certo 😋

____
### **Ideias _ou_ Hipóteses**

<p>
  Tive alguns problemas pequenos para configurar Typescript no projeto inicialmente
</p>

<p>
  Estou com a ideia de utilizar .sqlite por questão de praticidade 
</p>


<p>
  Utilizar o pacote dotenv para configurar as váriaveis de ambiente do projeto
</p>

<p>
  Alguns problemas para achar o folder correto do sqlite e dos logs mas foi tranquilo arrumar
</p>

<p>
  Tive alguns problemas para conectar o TypeORM mas agora está tudo funcionando
</p>

<p>
  Principalmente pelo formato do arquivo(.gz) imagino que precise ser descompactado e depois lido, por agora imagino que precisariamos utilizar a url https://challenges.coode.sh/food/data/json/{code} para os arquivos, não gostaria também de utilizar o arquivo index.txt dinamicamente(desnecessario para esse projeto). 
</p>

<p>
  Estou tentando adiantar grande parte do projeto o quanto antes para não ter problemas com os adicionais(que eu gostaria de fazer)
</p>

<p>
  Talvez haja a necessidade de baixar os arquivos para descompactar, estou vendo se adm-zip ou gunzip-file sejá mais apropriado para após ter sido baixado ou se há necessidade de baixar
</p>


<p>
  Não consegui fazer por nenhuma biblioteca, apenas com ferramentas nativas do NodeJS por problemas com o tamanho do buffer e problemas para conversão em json ou string, a forma encontrada foi salvar products.json.gz, descompactar para products.json e ler linha por linha. Antes dessa última solução não foi possivel limitar o buffer diretamente para o numero de string pois a função JSON.parse não conseguia formatar por necessariamente um começo ou fim, uma opção que vem a cabeça agora seria eliminar última linha incompleta/separar cada json por linha e ir formatando um por um.
</p>

<p>
  Percebi que será extremamente importante utilizar um banco NoSQL pelo formato dos dados serem dinamicos, será o proximo passo para eu continuar o meu progresso
</p>

<p>
  Após muitos problemas(muitos mesmo) estou partindo para o Linux, gastei varias horas tentando descobrir o do porque o mongodb não estava funcionando e não retornava erro(parava a aplicação inteira), me deseje sorte :)
</p>

<p>
  Consegui rodar pelo Prisma, porém tive que fazer toda a substituição, aparentemente o TypeORM não estava dando retorno de nenhum erro ou sucessão e ficava preso na tentativa de carregamento (funcionou com mongoose como teste e agora com o prisma) 😨
</p>

<p align="right">(<a href="#readme-top">Subir</a>)</p>

### **Off topic**
<p>
  Tomei um baile da TypeORM, não usem junto em nodejs com MongoDB, juro que foi mais de 4 horas de tentativas, até agora o pior.
</p>

<p>
  A mémoria do meu Linux está indo emborá por causa dos arquivos dentro do TMP das importações, chegou a 0bytes livres.
</p>
