# **Exercita365**

## Sobre o projeto

Com o Exercita365, 
O Exercita365 torna mais fácil encontrar locais para a prática de atividades físicas
Após se cadastrar e logar na plataforma, os usuários podem cadastrar novos locais de exercícios, encontrar pontos próximos em um mapa interativo ou em uma lista, visualizar informações detalhadas sobre os exercícios em cada ponto e contribuir com suas próprias experiências.

## Funcionalidades do projeto
- **Adicionar Cadastrar Usuários/Exercícios:** Os usuários podem realizar cadastros na plataforma e cadastrar locais de exercícios físicos.
- **Ler (visualizar) Exercícios:** Os usuários cadastrados podem visializar informações de locais para exercícios físicos.
- **Editar Editar Usuários/Exercícios:** É possível editar informações cadastrais do usuário e informações dos locais de exercícios.
- **Excluir Usuários/Exercícios:** Os usuários poderá realizar a exclusão de locais repetidos ou inexistentes. Também é possivel a exclusão de usuários inativos. Caso algum usuário seja ativo e tenha realizado colaborações para a plataforma, este usuário não poderá ser excluído.


## Tecnologias utilizadas
- **Frontend:** *React* com componentes funcionais, estilizado com *CSS* e *JavaScript*.
- - ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- - ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- - ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

- **Backend:** *Node.js* (Json Server) para simular backend.
- - ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- - ![jsonServer](https://img.shields.io/badge/jsonServer-6DA55F?style=for-the-badge&logoColor=white&color=blue&labelColor=white)


## Interface do Usuário

A Interface do Usuário deste projeto consiste em um layout simples e intuitiva para gerenciar os dados dos usuários e as listas de locais para exercícios físicos. <br>
Ao acessar, o usuário encontra a tela de login. Caso o usuário não esteja cadastrado, ele pode criar cadastro clicando em "Cadastre-se aqui".
![login](https://github.com/juniorpinhodev/assets/blob/main/Image-Exercita365/login.png) <br> <br>

Ao efetuar login, o usuário é direcionado a tela principal (Dashboard), o usuário encontra uma lista com informações de locais para exercícios físicos. Também encontra um Mapa com as marcações das localizações exatadas de cada local cadastrado. <br> <br>
![Dashboard1](https://github.com/juniorpinhodev/assets/blob/main/Image-Exercita365/dashboard-1.png) 
<br>
![Deashboard2](https://github.com/juniorpinhodev/assets/blob/main/Image-Exercita365/dashboard2.png) 

<br> <br>

Ao clicar no link "Locais", na barra de navegação, o usuário poderá cadstrar novos locais de exercícios físicos e colaborar com o Exercíta365. Também é possivel editar para corrigir informações de locais ou deletar locais, caso a informação esteja duplicada ou inexistente. 
![Locais](https://github.com/juniorpinhodev/assets/blob/main/Image-Exercita365/locais.png) <br> <br>


## Diagrama do Projeto
O diagrama do projeto ilustra o fluxo de dados entre o frontend e o backend da aplicação. 
Ao preencher a caixa de texto e clicar no botão "Adicionar", uma requisição POST é enviada para o backend (json Server) através do protocolo HTTP. O backend (Json Server) recebe essa requisição, adiciona um novo dado à lista de Usuários/Exercicios no frontend.
Para as operações de editar, deletar e exibir na tela, o fluxo é semelhante: uma requisição é enviada do frontend para o backend, que realiza as operações necessárias e retorna os dados atualizados para o frontend.

O diagrama abaixo visualiza esse processo de forma clara e mostra a interação entre as diferentes partes da aplicação, destacando a comunicação entre frontend e backend <br> <br>
![Diagrama](https://github.com/juniorpinhodev/assets/blob/main/Image-Exercita365/diagrama365.png)


## Guia de Instalação / Como Rodar o Projeto

### Clone este repositório
```bash
git clone https://github.com/juniorpinhodev/Exercita365.git
```
### Instalando as Dependências

#### 1. Entrar na pasta Exercita365
```bash
cd Exercita365
```

#### 2. instalar as dependências
```bash
npm install
```


**Frontend**
**Pré-requisitos: npm / yarn**

#### 1. entrar na pasta do projeto frontend
```bash
cd frontend
```

#### 2. instalar as dependências
- Instalando **npm**
```bash
npm install
```
<br>

- Instalando **json Server**
```bash
npm install json-server
```
<br>

- Instalando **react-dom**
```bash
npm install react-dom
```

<br>

- Instalando **react-router-dom**
```bash
npm install react-router-dom

```
<br>

- Instalando **react-hook-form**
```bash
npm install react-hook-form
```

<br>

- Instalando **leaflet**
```bash
npm install leaflet
```

## Executar o projeto

### Frontend

#### 1. Inicie o servidor **frontend**

- com NPM
```bash
npm run dev
```

### Backend (json Server)

#### 1. Inicie o servidor **Json Server**
```bash
json-server --watch data/db.json
```


# Acessando o Aplicativo
Acesse o aplicativo em seu navegador em http://localhost:5173

Este guia de instalação fornece instruções claras e separadas para instalar e executar tanto o backend quanto o frontend do projeto, tornando-o mais fácil de entender e seguir.


# Expressão de Gratidão e Contatos
Agradeço por visualizar este projeto! Para mais informações, visite meu portfolio ou entre em contato pelo LinkedIn.


**Jedir de O. Pìnho Junior** <br>
(Junior Pinho DEV)

[Portfólio profissional](https://www.juniorpinho.tech) (Me conheça melhor)<br>

[Meu Linkedin](https://www.linkedin.com/in/juniorpinhodev)