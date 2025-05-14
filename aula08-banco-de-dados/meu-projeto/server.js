// exemplo de conexão com banco de dados MySQL gerado pelo Gemini 
//
// 1. criar pasta para projeto
// 2. mudar para dentro da pasta
// 3. executar o comando 
//     npm init -y
// 4. instalar express e mysql2
//     npm install express mysql2
//
// 5. para executar o servidor, use o comando: 
//     node server.js
// 6. para testar a conexão, use o comando:   
//     curl http://localhost:3000/usuarios
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Configurações da conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost', // ou o endereço do seu servidor MySQL
  port: 3307,
  user: 'root', // seu nome de usuário do MySQL
  password: '', // sua senha do MySQL
  database: 'facsenac' // o nome do seu banco de dados
});

// Conecta ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL!');
});

// Rota para a página inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo à sua aplicação Node.js com Express e MySQL!');
});

// Rota para consultar os usuários
app.get('/usuarios', (req, res) => {
  const sql = 'SELECT nome, cidade, uf, cod, data FROM usuarios';

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      res.status(500).json({ error: 'Erro ao buscar os usuários' });
      return;
    }
    res.json(results);
  });
});

// Inicia o servidor Express
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});