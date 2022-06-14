
const db = require("../database");
const res = require("express/lib/response");

function findAll() {
    const sql = "SELECT * FROM books"
return new Promise((resolve, reject) => {
    db.all(sql, (error, rows) => {
      if(error) {
        console.error(error.message);
        res.status(400);
        reject(error);
        
      }
      res.status(200); 
      resolve(rows);
       
        
    
    });
});}
function findOne(id) {
    const sql = "SELECT * FROM books WHERE id = ?"
    return new Promise((resolve, reject) => {
      db.get(sql,id, (error, rows) => {
        if (error) {
          console.error(error.message);
        res.status(400);
        reject(error);
        
      }
      res.status(200); 
      resolve(rows);
      })
    })
}
function addOne(book) {
const sql = "INSERT INTO books (title, author, genre) VALUES (?, ?, ?)";
return new Promise((resolve, reject) => { 
  db.run(sql, [book.title, book.author, book.genre], (error) => {
    if (error) {
      console.error(error.message)
      res.status(400);
      reject(error);
      
    }
    res.status(200); 
    resolve();
  });
});
}
function deleteOne(id) {
  const sql = "DELETE FROM books WHERE id = ?";
  return new Promise ((resolve, reject) => {
    db.get(sql,id, (error) => {
      if (error) {
        console.error(error.message);
        res.status(400);
        reject(error);
        
      }
      res.status(200); 
      resolve();
    });
  });
}

function putBook(id, book) {
  const sql = `UPDATE books SET title = '${book.title}', author = '${book.author}', genre = '${book.genre}' WHERE id = ${id}`;
  return new Promise ((resolve, reject) => {
  db.run(sql, (error) => {
    if (error) {
      console.log(error.message);
      res.status(400);
      reject(error);
      
    }
    res.status(200); 
    resolve();
  });
  });
}

function patchBook(id, book) {
  const sql = `UPDATE books SET title = '${book.title}' WHERE id = ${id}`;
  return new Promise((resolve, reject) => {
    db.run(sql, (error) => {
      if (error) {
        console.error(error.message);
        res.status(400);
        reject(error);
        
      }
      res.status(200); 
      resolve();
    });
  });
}
  
/*
    {"id": 1,
    "title": "Harry Potter",
    "author":"J.K. Rowling",
    "genre":"Fantasy"},
    
    {"id": 2,
    "title": "Twilight",
    "author":"Stephenie Meyer",
    "genre":"Fantasy"},
    
    {"id": 3,
    "title": "Hunger games",
    "author":"Suzanne Collins",
    "genre":"Sci-fi"},
    
    {"id": 4,
    "title": "Lord of the rings",
    "author":"J.R.R. Tolkien",
    "genre":"Fantasy"}
    */

module.exports = {
  findAll, 
  findOne,
  addOne, 
  deleteOne,
  putBook,
  patchBook 
}