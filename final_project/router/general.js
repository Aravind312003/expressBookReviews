const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();
const axios = require('axios');

// Task 10: Get the book list available in the shop using Promises
public_users.get('/', function (req, res) {
    const getBooks = new Promise((resolve, reject) => {
        if (books) {
            resolve(books);
        } else {
            reject("Books not found");
        }
    });

    getBooks
        .then((bookList) => {
            res.status(200).send(JSON.stringify(bookList, null, 4));
        })
        .catch((error) => {
            res.status(500).json({ message: error });
        });
});