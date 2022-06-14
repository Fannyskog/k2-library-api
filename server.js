const express = require("express");

const app = express();
const port = 4000;

const bookRouter = require("./routers/books.router");

app.use(express.json());
app.use(bookRouter);


app.listen(4000, () => {
    console.log(`Server runs on ${port}`);
})