require('dotenv').config();

const express = require('express'); 
const app = express(); 
app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const bcrypt = require('bcrypt');

const users = require('./models/users');



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

// ###THINK ABOUT IT###
// not sure if we will ever need to display the whole array of users
// users.getAll()
//     .then((userObject) =>{
//         console.log(userObject);
//     })

// UPDATE 
// =================
// ## Update name,username,email,city,state or all/what is best way?##

// DELETE
// =================
// ## Delete by name or id?/ I'm thinking by id since the user is logged in ##
// ## OR should we not delete at all? ##
// ## schema --> 'on delete cascade' to foreign key ##

// *************************************************
// ITEMS -CRUD
// =================

// CREATE
// =================
// ## add items ##

// RETRIEVE
// =================
// users.getAll()
//     .then((itemObject) =>{
//         console.log(itemObject);
//     })

// ## get items by item/names/keywords ##

// UPDATE 
// =================
// ## update items by id ##

// DELETE
// =================
// ## delete items by id ##
// ## 'on delete cascade'
