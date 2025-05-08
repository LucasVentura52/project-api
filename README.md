# Projeto Juliano - Autenticação com Vue 3 + TypeScript + Vuetify

Este projeto é uma aplicação web com login, cadastro e tela de boas-vindas, usando Vue 3, Vuetify e integração com uma API de autenticação externa.

## Funcionalidades

- Tela de login estilizada com validação
- Cadastro de novo usuário com confirmação de senha
- Redirecionamento com token e expiração
- SweetAlert2 para mensagens visuais
- Roteamento protegido e transições animadas

## Tecnologias

- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vuetify](https://next.vuetifyjs.com/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [Docker](https://www.docker.com/)

## Clonando o repositório

Para obter uma cópia do projeto em sua máquina local, use o comando abaixo:

```bash
git clone https://github.com/LucasVentura52/project-api.git
cd project-api
```

## Rodando localmente

```bash
npm install
npm run dev
```

## Build para produção

```bash
npm run build
```

## Rodando com Docker

```bash
docker build -t vue-auth-app .
docker run -p 8080:80 vue-auth-app
```

Ou com Docker Compose:

```bash
docker-compose up --build
```

Depois, acesse [http://localhost:8080](http://localhost:8080)

## Autor

Lucas Ventura