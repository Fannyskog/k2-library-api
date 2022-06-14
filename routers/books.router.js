const express = require("express");

const bookController = require("../controllers/books.controllers");

const bookRouter = express.Router();

bookRouter.get("/books", bookController.getBooks)
bookRouter.get("/books/:id", bookController.getBook)
bookRouter.post("/books", bookController.addBook)
bookRouter.delete("/books/:id", bookController.deleteBook)
bookRouter.put("/books/:id", bookController.putBook)
bookRouter.patch("/books/:id", bookController.patchBook)

module.exports = bookRouter;