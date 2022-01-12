# Ranking games

A aplicação como um todo, tem o objetivo de listar, os jogos em uma página inicial, com a exigencia minima de 8 seleções, e então, a partir dessa seleção, é feita uma nova listagem baseada em seus dados.

## Overview da aplicação
- Utiliza Express para o Backend
- Utiliza NextJS para o Frontend (React)
- Utiliza Axios como client http
- Backend foi projetado com arquitetura hexagonal visando o crescrimento esponencial da aplicação
- Pode ser rodada separadamente com npm, yarn ou docker

## Backend REST API
O Backend foi construído com [ExpressJS](https://expressjs.com/pt-br/) sendo utilizado em sua estruturação, arquitetura hexagonal em conjunto com o paradigma de orientação a objetos. Toda a lógica da aplicação está centralizada nele, sendo resposável por listar e ranquear os jogos selecionados.

**Sobre o Backend**

Algumas das tecnologias utilizadas:
- Typescript
- Lint com ESlint + Prettier
- Testes unitarios com Jest
- Tsyringe para injeção de dependencias
- Docker para isolar a aplicação em produção

**Rotas disponiveis**
| Rota         |Método    | Handler                   | BODY                                                                                   |
|--------------|:--------:|---------------------------|:--------------------------------------------------------------------------------------:|
|/games        |    GET   | `GameController.getGames` |                                                                                        |
|/games/ranking|    POST  | `GameController.rankGames`| Espera uma lista de ids dos games selecionados: <br />`{ "ids": ["/id-1", "/id-2"] }`  |

**Rodando localmente usando docker**

Siga os próximos passos para rodar a API localmente:

1. `cd backend`
2. `docker build -t api-games .`
3. `docker run --name jao-games-api -p 4000:4000 -d api-games`


**Rodando localmente usando npm**

1. `cd backend`
2. `npm install`
3. `npm run dev`

E então sua api estará rodando em `http://localhost:4000`

**Rodando testes**

1. `cd backend`
2. `npm install`
3. `npm run test`

## Frontend NextJS (React)

O Frontend foi construído usando [NextJS](https://nextjs.org/), sendo responsável por consumir o backend, exigindo menos lógica possível, se importando apenas com o conteúdo visual da aplicação.

**Sobre o frontend**

Algumas das tecnologias utilizadas:
- Typescript
- Lint com ESlint
- Styled-components para estilização das páginas
- Context API para gerencimaneto de estados global

**Rodando localmente usando docker**

Siga os próximos passos para rodar a API localmente:

1. `cd frontend`
2. `docker build -t web-games .`
3. `docker run --name jao-games-web -p 3000:3000 -d web-games`


**Rodando localmente usando npm**

1. `cd frontend`
2. `npm install`
3. `npm run dev`

E então sua api estará rodando em `http://localhost:3000`

## Rodando toda a aplicação com o docker-compose

Caso tenha interesse, para rodar toda a aplicação apenas com 1 comando, deve ter o [docker-compose](https://docs.docker.com/compose/install/#install-compose) instalado.

Na raiz do projeto, rode o comando `docker-compose up`.
Após terminar, acesse `http://localhost:3000` e toda a aplicação deverá estar funcionando.
