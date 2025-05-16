const express = require('express');
const cors = require('cors');
const livrosRoutes = require('./routes/livros');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/livros', livrosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
