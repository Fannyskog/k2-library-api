const sqlite3 = require("sqlite3").verbose();

const  db = new sqlite3.Database("./db.sqlite", (error) => {
    if(error) {
        console.error(error.message);
        throw error;
    }
    console.log("Connected to database");

    const statement = `CREATE TABLE books 
    (id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    author TEXT,
    genre TEXT )`;

    db.run(statement, (error) => {
        if(error) {
            console.error(error.message);
            
        } else {
    const insert = "INSERT INTO books (title, author, genre) VALUES(?,?,?)"
    db.run (insert, ["The twilight saga", "Stephenie Meyer", "Fantasy" ]);
    //db.run (insert, ["Sagan om det röda äpplet", " Jan Lööf", "Barnbok" ]);
    //db.run (insert, ["Eragon", "Christopher Paolini", "Fantasy" ]);
    
    }});
});




module.exports = db;
