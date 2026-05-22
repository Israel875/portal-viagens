Portal de Viagens - Tarefa do curso Ebac.

Projeto desenvolvido como tarefa do curso Full Stack Java da EBAC (Escola Britânica de Artes Criativas e Tecnologia), com o objetivo de praticar os fundamentos do Next.js.

O Portal de Viagens é uma aplicação web que simula um portal turístico, onde o usuário pode visualizar uma listagem de destinos com nome, imagem e descrição de cada local. O projeto foi construído com Next.js 16 e TypeScript, utilizando CSS Modules para estilização.

A aplicação conta com duas páginas: a página inicial com apresentação do portal e a página de destinos com a listagem em cards. Foi criado um componente de Layout reutilizável com header e footer presente em todas as páginas, e um componente CardDestino responsável por exibir as informações de cada destino.

Os conceitos praticados incluem roteamento baseado em arquivos com App Router, tipagem de dados com TypeScript, estilização com CSS Modules, navegação entre páginas com next/link e organização de dados mockados separados da lógica de renderização.
Para rodar o projeto localmente, clone o repositório, instale as dependências com npm install e rode npm run dev. Acesse http://localhost:3000 no navegador.

# Portal Viagens

Aplicação de portal de viagens desenvolvida com Next.js e TypeScript.

## 🚀 Deploy

[Acesse o projeto aqui](https://portal-viagens-black.vercel.app)

## 🛠️ Tecnologias

- Next.js 16
- React 19
- TypeScript

## ⚙️ CI/CD

Pipeline configurada com GitHub Actions:
- Lint automático a cada push
- Build de verificação
- Deploy automático na Vercel
