require('dotenv').config();

const express = require('express'); 
const app = express(); 
app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const bcrypt = require('bcrypt');

const users = require('./models/users');
const Categories = require('./models/categories');

const books = new Categories(1, 'books');

// *************************************************
// USERS - CRUD
// =================

// CREATE
// =================
// users.addUser('asdf', 'jk', 'asdf@email.com', 'asdf', 'qw')
//     .then((newUser) =>{
//         console.log(newUser);
//     })

// RETRIEVE
// =================
// users.getUserById(1)
//     .then((theUser) =>{
//         console.log(theUser);
//     })


// UPDATE 
// =================

// DELETE
// =================

// *************************************************
// ITEMS -CRUD
// =================


// RETRIEVE
// =================
books.getAllItems()
    .then((allBooks) =>{
        console.log(allBooks);
    })

// books.getFilteredItems('%ros%')
//     .then((results) => {
//         console.log(results);
//     })

// ## get items by item/names/keywords ##

// UPDATE 
// =================
// ## update items by id ##

// DELETE
// =================
// ## delete items by id ##
// ## 'on delete cascade'
