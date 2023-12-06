# API de Análise de Dados

Esta é uma API simples de análise de dados construída em Node.js usando Express. Ela permite a manipulação básica de dados de produtos, incluindo adição, listagem, atualização e exclusão.

Funcionalidades
Listar Dados: Endpoint para obter a lista de produtos.
Análise de Receita: Endpoint para calcular a receita total com base nos produtos e suas quantidades e preços.
Adicionar Dados: Endpoint para incluir novos produtos.
Atualizar Dados: Endpoint para modificar informações de um produto existente.
Excluir Dados: Endpoint para remover um produto.
Como Testar a API
Clone o Repositório

Baixe ou clone este repositório para o seu ambiente local.

Instale as Dependências

Certifique-se de ter o Node.js e o npm instalados. Use o comando npm install na pasta do projeto para instalar as dependências.

Execute o Servidor

Use o comando npm start na pasta do projeto para iniciar o servidor da API.

Endpoints Disponíveis

Listar todos os produtos: GET http://localhost:3000/dados
Análise de Receita: GET http://localhost:3000/analise
Adicionar um novo produto: POST http://localhost:3000/dados
Atualizar um produto existente: PUT http://localhost:3000/dados/:id
Excluir um produto: DELETE http://localhost:3000/dados/:id
Formato dos Dados

Certifique-se de enviar e receber os dados no formato JSON. Para adicionar ou atualizar um produto, utilize o seguinte formato:
{
  "id": 3,
  "nome": "Produto C",
  "quantidade": 75,
  "preco": 15.99
}
