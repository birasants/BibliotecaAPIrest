const express = require('express');
const { showCollection,obtainByID,addBook,bookAdjust,editParams } = require('./controladores/livros');
const rotas = express();

rotas.get('/livros',showCollection);
rotas.get('/livros/:id',obtainByID);
rotas.post('/livros',addBook);
rotas.put('/livros/:id',bookAdjust);
rotas.patch('/livros/:id',editParams)
module.exports = {
  rotas
}