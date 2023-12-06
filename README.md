# API-AnaliseDeDados-NodeJS
API de Análise de Dados
Esta é uma API simples de análise de dados construída em Node.js usando Express. Ela permite a manipulação básica de dados de produtos, incluindo adição, listagem, atualização e exclusão.

Funcionalidades
Listar Dados: Endpoint para obter a lista de produtos.
Análise de Receita: Endpoint para calcular a receita total com base nos produtos e suas quantidades e preços.
Adicionar Dados: Endpoint para incluir novos produtos.
Atualizar Dados: Endpoint para modificar informações de um produto existente.
Excluir Dados: Endpoint para remover um produto.
Como Testar a API
Clone o Repositório

bash
Copy code
git clone https://github.com/seu-usuario/api-analise-dados.git
Instale as Dependências

Certifique-se de ter o Node.js e o npm instalados. Na pasta do projeto, execute:

bash
Copy code
npm install
Execute o Servidor

bash
Copy code
npm start
Endpoints Disponíveis

Listar todos os produtos:

bash
Copy code
GET http://localhost:3000/dados
Análise de Receita:

bash
Copy code
GET http://localhost:3000/analise
Adicionar um novo produto:

bash
Copy code
POST http://localhost:3000/dados
Atualizar um produto existente:

bash
Copy code
PUT http://localhost:3000/dados/:id
Excluir um produto:

bash
Copy code
DELETE http://localhost:3000/dados/:id
Formato dos Dados

Certifique-se de enviar e receber os dados no formato JSON. Para adicionar ou atualizar um produto, utilize:

json
Copy code
{
  "id": 3,
  "nome": "Produto C",
  "quantidade": 75,
  "preco": 15.99
}
