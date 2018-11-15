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
users.addUser('asdf', 'jk;', 'asdf@email.com', 'asdfjkl;', 'qweruiop')
    .then((newUser) =>{
        console.log(newUser);
    })

// RETRIEVE
// =================
// ###THINK ABOUT IT###
// not sure if we will ever need to display the whole array of users
// users.getAll()
//     .then((userObject) =>{
//         console.log(userObject);
//     })

    // UPDATE 
// =================

// DELETE
// =================

// *************************************************
// ITEMS -CRUD
// =================

// CREATE
// =================

// RETRIEVE
// =================
// users.getAll()
//     .then((itemObject) =>{
//         console.log(itemObject);
//     })

    // UPDATE 
// =================

// DELETE
// =================
