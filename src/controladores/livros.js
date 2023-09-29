const {livros} = require('../dados/livros');
let {identificadorLivro} = require('../dados/livros')


const showCollection = (req,res)=>{
  return res.json(livros);
}

const obtainByID = (req,res)=>{
  const livroId = Number(req.params.id);

  const livro = livros.find(livro => livro.id === livroId)

  if(!livro){
    return res.status(404).json({mensagem: "Não existe livro para o ID informado."})
  }

  return res.json(livro);
}

const addBook =(req,res)=>{
  const {titulo,autor,ano,numPaginas} = req.body;
  if(!titulo){
    return res.status(400).json({mensagem:'Titulo eh obrigatorio para adicao de um livro!'});
  }
  if(!autor){
    return res.status(400).json({mensagem:'Autor eh obrigatorio para adicao de um livro!'});
  }
  if(!ano){
    return res.status(400).json({mensagem:'Ano de publicacao eh obrigatorio para adicao de um livro!'});
  }
  if(!numPaginas){
    return res.status(400).json({mensagem:'Ano de publicacao eh obrigatorio para adicao de um livro!'});
  }

  const newBook = [
    {
      id: identificadorLivro++,
      titulo,
      autor,
      ano,
      numPaginas
    }
  ]

  livros.push(newBook);
  return res.status(201).json({mensagem:'Livro adicionado com sucesso!'});
}

const bookAdjust = (req,res)=>{
  const livroId = Number(req.params.id);
  const {titulo,autor,ano,numPaginas} = req.body;

  let livro = livros.find(livro => livro.id === livroId);
  if(!livro){
    return res.status(404).json({mensagem:'Não existe livro para o ID informado.'})
  }
  if(!titulo){
    return res.status(400).json({mensagem:'Titulo eh obrigatorio para alterar o livro!'});
  }
  if(!autor){
    return res.status(400).json({mensagem:'Autor eh obrigatorio para  alterar o livro!'});
  }
  if(!ano){
    return res.status(400).json({mensagem:'Ano de publicacao eh obrigatorio para alterar o livro!'});
  }
  if(!numPaginas){
    return res.status(400).json({mensagem:'Ano de publicacao eh obrigatorio para alterar o livro!'});
  }

  livro = [
    {
      titulo,
      autor,
      ano,
      numPaginas
    }
  ]
  
  return res.json({mensagem:'Livro substituído.'});
}

const editParams = (req,res) =>{
  const livroId = Number(req.params.id);
  const {titulo,autor,ano,numPaginas} = req.body;

  let livro = livros.find(livro => livro.id === livroId);
  if(!livro){
    return res.status(404).json({mensagem:'Não existe livro para o ID informado.'})
  };

  if(titulo){
    livro.titulo = titulo;
  }
  if(autor){
    livro.autor = autor;
  }
  if(ano){
    livro.ano = ano;
  }
  if(numPaginas){
    livro.numPaginas = numPaginas;
  }
  return res.json({mensagem:'Livro sofreu alteracoes!'})
}

module.exports={
  showCollection,
  obtainByID,
  addBook,
  bookAdjust,
  editParams
}