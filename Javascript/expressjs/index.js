// Import express framework
// Express -> object
const express = require("express");

// Database
const database = require("./database/index");

// Creating a server
const server = express();

// Confirgurations (Middleware)
server.use(express.json());

// get,post,put,delete

/*
Route: /
Description: get all books
Access: PUBLIC
Parameters: NONE
Method: GET
*/

server.get("/", (req,res) => {
    return res.json({books: database.books});
});

// HW -> get all authors, get all publications ✅

/* 
Route: /is/:ISBN
Description: get specific book based on ISBN
Access: PUBLIC
Parameters: ISBN
Method: GET
*/

server.get("/is/:ISBN", (req,res) => {
    const isbnBook = database.books.filter(
        (book) => book.ISBN === req.params.ISBN
    );

    if(isbnBook.length === 0){
        return res.json({error: `No book found with ISBN of ${req.params.ISBN}`});
    }
    return res.json({BookByISBN: isbnBook});
});

/*
Route: /author/about/:id
Description: get specific author based on id
Access: PUBLIC
Parameters: id
Method: GET
*/

server.get("/author/about/:id", (req,res) => {
    const idAuthor = database.authors.filter(
        (author) => author.id == req.params.id
    );

    if(idAuthor.length === 0){
        return res.json({error: `No author exists by the id ${req.params.id}`});
    }
    return res.json({AuthorById: idAuthor});
});

// Event listener for the server
server.listen(3000, () => console.log("Server running successfully!!"));