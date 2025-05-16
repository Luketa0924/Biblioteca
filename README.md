Este projeto é uma aplicação web que permite gerenciar um acervo de livros, incluindo funcionalidades para adicionar, visualizar, atualizar e remover registros. A aplicação é dividida em back-end e front-end, utilizando tecnologias modernas para garantir eficiência e escalabilidade.

🚀 Tecnologias Utilizadas
Back-end:

Node.js

Express

SQLite

Sequelize (ORM para Node.js)

CORS (Middleware para habilitar CORS)

Front-end:

HTML5

JavaScript (Fetch API)

📁 Estrutura do Projeto
pgsql
Copiar
Editar
biblioteca/
├── backend/
│   ├── models/
│   │   └── livro.js
│   ├── routes/
│   │   └── livros.js
│   ├── database/
│   │   └── database.sqlite
│   ├── app.js
│   └── package.json
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md
⚙️ Instalação e Execução
Pré-requisitos
Node.js instalado na máquina

Git para clonar o repositório (opcional)

Passos para rodar o projeto
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/biblioteca.git
Navegue até a pasta do back-end:

bash
Copiar
Editar
cd biblioteca/backend
Instale as dependências:

bash
Copiar
Editar
npm install
Execute as migrações para criar o banco de dados:

Caso esteja utilizando Sequelize, execute:

bash
Copiar
Editar
npx sequelize db:migrate
Nota: Certifique-se de que o arquivo de configuração do Sequelize (config/config.json) esteja corretamente configurado para utilizar o SQLite.

Inicie o servidor:

bash
Copiar
Editar
node app.js
O servidor estará rodando em http://localhost:3000.

Acesse o front-end:

Abra o arquivo frontend/index.html em seu navegador para utilizar a interface da aplicação.

📌 Funcionalidades
Listar Livros: Visualize todos os livros cadastrados.

Adicionar Livro: Cadastre um novo livro informando título, autor e ano de publicação.

Atualizar Livro: Edite as informações de um livro existente.

Remover Livro: Exclua um livro do acervo.

📄 API Endpoints
GET /livros – Retorna a lista de todos os livros.

GET /livros/:id – Retorna os detalhes de um livro específico.

POST /livros – Adiciona um novo livro.

PUT /livros/:id – Atualiza as informações de um livro existente.

DELETE /livros/:id – Remove um livro do acervo.
