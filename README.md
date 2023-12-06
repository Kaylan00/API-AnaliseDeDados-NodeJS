# API de Análise de Dados

Esta é uma API simples de análise de dados construída em Node.js usando Express. Ela permite a manipulação básica de dados de produtos, incluindo adição, listagem, atualização e exclusão.

## Funcionalidades

- **Listar Dados**: Endpoint para obter a lista de produtos.
- **Análise de Receita**: Endpoint para calcular a receita total com base nos produtos e suas quantidades e preços.
- **Adicionar Dados**: Endpoint para incluir novos produtos.
- **Atualizar Dados**: Endpoint para modificar informações de um produto existente.
- **Excluir Dados**: Endpoint para remover um produto.

## Como Testar a API

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/seu-usuario/api-analise-dados.git
   ```

2. **Instale as Dependências**

   Certifique-se de ter o Node.js e o npm instalados. Na pasta do projeto, execute:

   ```bash
   npm install
   ```

3. **Execute o Servidor**

   ```bash
   npm start
   ```

4. **Endpoints Disponíveis**

   - Listar todos os produtos:

     ```
     GET http://localhost:3000/dados
     ```

   - Análise de Receita:

     ```
     GET http://localhost:3000/analise
     ```

   - Adicionar um novo produto:

     ```
     POST http://localhost:3000/dados
     ```

   - Atualizar um produto existente:

     ```
     PUT http://localhost:3000/dados/:id
     ```

   - Excluir um produto:

     ```
     DELETE http://localhost:3000/dados/:id
     ```

5. **Formato dos Dados**

   Certifique-se de enviar e receber os dados no formato JSON. Para adicionar ou atualizar um produto, utilize:

   ```json
   {
     "id": 3,
     "nome": "Produto C",
     "quantidade": 75,
     "preco": 15.99
   }
   ```

## Contribuindo

Sinta-se à vontade para contribuir com melhorias, correções ou novas funcionalidades. Basta fazer um fork do repositório, criar uma branch com suas modificações e enviar um pull request.
