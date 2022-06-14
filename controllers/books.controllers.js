const model = require("../models/books.model");

//http://localhost:4000/books
async function getBooks(req, res) {
  const results = await model.findAll();
  res.status(200).json(results);

  if (!results) {
    return res.status(400);
  }
 
}
//http://localhost:4000/books/2
async function getBook(req,res) {
  const theBook = req.params.id;
  const foundBook = await model.findOne(theBook);
  
  res.status(200).json(foundBook);

  if (!foundBook) {
    return res.status(400);
  }
}
//http://localhost:4000/books/2
async function deleteBook(req,res) {
  const theBook = req.params.id;
  const deleteBook = await model.deleteOne(theBook);

  res.status(200).json(deleteBook);

  if (!deleteBook) {
    return res.status(400);
  }
}
//http://localhost:4000/books
/* {
    "title": "Sagan om det röda äpplet",
    "author":"Jan Lööf",
    "genre":"Barnbok"
 }*/ 
async function addBook(req, res) {
  const { title, author, genre }  = req.body;
 
 
 if (!title || !author || !genre)  {
    return res.status(400);
  }

  const newBook = { title, author, genre };
  await model.addOne(newBook);
  res.status(200);
  res.json(newBook);
}

async function putBook(req, res) {
  const { title, author, genre } = req.body;
  const theBook = req.params.id;

  if (!title || !author || !genre) {
    return res.status(400);
  
  }
  const putBook = { title, author, genre };

  await model.putBook(theBook, putBook)
  res.status(200).json(putBook);
}

async function patchBook(req, res) {
  const { title } = req.body;
  const theBook = req.params.id;

  if (!title) {
    return res.status(400);
  }
 
  const patchBook = { title };
  
  await model.patchBook(theBook, patchBook)
  res.status(200).json(patchBook);
}

  module.exports = {
    getBooks,
    getBook,
    deleteBook,
    addBook,
    putBook,
    patchBook
  }