const fs = require('fs');
const path = require('path');

const caminhoArquivo = path.join(__dirname, '..', 'data', 'livros.json');

function lerDados() {
  try {
    const dados = fs.readFileSync(caminhoArquivo, 'utf8');
    return JSON.parse(dados);
  } catch (err) {
    return [];
  }
}

function escreverDados(dados) {
  fs.writeFileSync(caminhoArquivo, JSON.stringify(dados, null, 2));
}

exports.listarLivros = (req, res) => {
  const livros = lerDados();
  res.json(livros);
};

exports.obterLivro = (req, res) => {
  const livros = lerDados();
  const livro = livros.find(l => l.id === parseInt(req.params.id));
  if (livro) {
    res.json(livro);
  } else {
    res.status(404).json({ mensagem: 'Livro não encontrado' });
  }
};

exports.adicionarLivro = (req, res) => {
  const livros = lerDados();
  const novoLivro = { id: Date.now(), ...req.body };
  livros.push(novoLivro);
  escreverDados(livros);
  res.status(201).json(novoLivro);
};

exports.atualizarLivro = (req, res) => {
  const livros = lerDados();
  const index = livros.findIndex(l => l.id === parseInt(req.params.id));
  if (index !== -1) {
    livros[index] = { id: livros[index].id, ...req.body };
    escreverDados(livros);
    res.json(livros[index]);
  } else {
    res.status(404).json({ mensagem: 'Livro não encontrado' });
  }
};

exports.removerLivro = (req, res) => {
  let livros = lerDados();
  const index = livros.findIndex(l => l.id === parseInt(req.params.id));
  if (index !== -1) {
    const removido = livros.splice(index, 1);
    escreverDados(livros);
    res.json(removido[0]);
  } else {
    res.status(404).json({ mensagem: 'Livro não encontrado' });
  }
};
