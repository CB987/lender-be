require('dotenv').config();

const express = require('express'); 
const app = express(); 
app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const bcrypt = require('bcrypt');


const Categories = require('./models/categories');
const books = new Categories(1, 'books');

const User = require('./models/users');
const beyonce = new User(31, 'beyonce', 'queenb', 'queen@me.com', 'houston', 'TX');


// User.add('beyonce', 'queenb', 'queen@me.com', 'houston', 'TX')
//     .then(result => {
//         console.log(result)
//     })


// beyonce.addItem(1, 'Harry Potter and the Sorcerers Stone', 'JK Rowling fiction magic wizards', true) 
//     .then(result => {
//         console.log(result)
//     });

// beyonce.getItems()
//     .then(result => {
//         console.log(result)
//     });

// beyonce.updateItemStatus(2, 31)
//     .then(result =>
//         console.log(result));

beyonce.updateItemInfo(31, 1, 'Harry Potter and the Goblet of Fire', 'JK Rowling fiction magic sci fi')
    .then(result => {
        console.log(result)
    });
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
