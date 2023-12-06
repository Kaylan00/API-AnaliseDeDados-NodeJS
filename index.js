const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let data = [
  { id: 1, nome: 'Produto A', quantidade: 100, preco: 10.99 },
  { id: 2, nome: 'Produto B', quantidade: 50, preco: 7.99 },
];

app.get('/dados', (req, res) => {
  res.json(data);
});

app.get('/analise', (req, res) => {
  const receitaTotal = data.reduce((total, produto) => total + produto.quantidade * produto.preco, 0);
  res.json({ receitaTotal });
});

app.post('/dados', (req, res) => {
  const novoProduto = req.body;
  if (!novoProduto.id || !novoProduto.nome || !novoProduto.quantidade || !novoProduto.preco) {
    return res.status(400).json({ error: 'Forneça todos os campos: id, nome, quantidade, preco.' });
  }
  data.push(novoProduto);
  res.status(201).json(novoProduto);
});

app.put('/dados/:id', (req, res) => {
  const { id } = req.params;
  const { nome, quantidade, preco } = req.body;

  const produtoIndex = data.findIndex(produto => produto.id === parseInt(id));
  if (produtoIndex === -1) {
    return res.status(404).json({ error: 'Produto não encontrado.' });
  }

  const produtoAtualizado = { ...data[produtoIndex], nome, quantidade, preco };
  data[produtoIndex] = produtoAtualizado;

  res.json(produtoAtualizado);
});

app.delete('/dados/:id', (req, res) => {
  const { id } = req.params;

  const initialLength = data.length;
  data = data.filter(produto => produto.id !== parseInt(id));

  if (data.length === initialLength) {
    return res.status(404).json({ error: 'Produto não encontrado.' });
  }

  res.json({ message: 'Produto excluído com sucesso.' });
});

app.listen(port, () => {
  console.log(`Servidor da API de Análise de Dados rodando na porta ${port}`);
});
