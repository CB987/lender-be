require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./models/db');
const Item = require('./models/Item');
const Category = require('./models/Category');
const User = require('./models/User');

const page = require('./views/page');
const homepage = require('./views/homepage');
const books = require('./views/books');
const registrationForm = require('./views/registrationForm');


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

// beyonce.updateItemInfo(31, 1, 'Harry Potter and the Goblet of Fire', 'JK Rowling fiction magic sci fi')
//     .then(result => {
//         console.log(result)
//     });
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
Item.getAllItems()
    .then((allBooks) => {
        console.log(allBooks);
    })
// app.get('/books', (req, res) => {
//     Item.getAllItems()
//         .then((allBooks) => {
//             console.log('i got all the books')
//             // res.send(page(allBooks));
//         });
// });
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
app.get('/', (req, res) => {
    const thePage = page(homepage());
    res.send(thePage);
})

app.get('/books', (req, res) => {
    const thePage = page(books());
    res.send(thePage);
})


// ====================================================
// User Registration
// ====================================================

app.get('/register', (req, res) => {
    const theForm = registrationForm();
    const thePage = page(theForm);
    res.send(thePage);
})

app.post('register', (req, res) => {
    const newName = req.body.name;
    const newUsername = req.body.username;
    const newPassword = req.body.password;
    
})



app.listen(4000, () => {
    console.log('you in');
})