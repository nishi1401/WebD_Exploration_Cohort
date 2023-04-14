let books = [
    {
        ISBN: "12345ONE",
        title: "Getting started with MERN",
        authors: [1,2],
        language: "en",
        pubDate: "2021-07-07",
        numOfPage: 225,
        Category: ["fiction","programming","tech","web dev"],
        publication: 1
    },

    {
        ISBN: "12345TWO",
        title: "Getting started with Python",
        authors: [1],
        language: "en",
        pubDate: "2021-07-07",
        numOfPage: 225,
        Category: ["programming","tech","web dev"],
        publication: 2
    }
];

let authors = [
    {
        id: 1,
        name: "Alicia",
        books: ["12345ONE","12345TWO"],
    },

    {
        id: 2,
        name: "Deepak",
        books: ["12345ONE",]
    }
];

let publications = [
    {
        id: 1,
        name: "Chakra",
        books: ["12345ONE"],
    }
];

module.exports = {books , authors , publications};