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
const myAccount = require('./views/myaccount');
const owned = require('./views/owned');
const borrowing = require('./views/borrowing');

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

// ====================================================
// Serving
// ====================================================
app.listen(4000, () => {
    console.log('you in');
})

// ====================================================
// Home Page
// ====================================================
app.get('/', (req, res) => {
    const thePage = page(homepage());
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

app.post('/register', (req, res) => {
    const newName = req.body.name;
    const newUsername = req.body.username;
    const newPassword = req.body.password;
    const newEmail = req.body.email;
    const newCity = req.body.city;
    const newState = req.body.state;
    console.log(newName);
    console.log(newUsername);
    console.log(newPassword);
    console.log(newEmail);
    console.log(newCity);
    console.log(newState);

    User.add(newName, newUsername, newPassword, newEmail, newCity, newState)
        .then(newUser => {
            res.redirect('/welcome');
        });
});

app.get('/welcome', (req, res) => {
    // send them to welcome page
    res.send(page('<h1>hey buddy</h1>'));
    // let visitorName = 'Person of the World';
    // if (req.session.user) {
    //     visitorName = req.session.user.username;
    // }
    // res.send(page(`<h1>Hey ${visitorName}</h1>`, 
    // req.session.user));
})

// ====================================================
// My Account
// ====================================================
app.get('/myaccount', (req, res) => {
    const thePage = page(myAccount());
    res.send(thePage);
})


app.get('/myaccount/owned', (req, res) => {
    Item.getItemsByOwner(1)
        .then(myOwnerItems => {
            // const myItems = myOwnerItems.map(item).join('');
            console.log(myOwnerItems);
            const thePage = page(owned(myOwnerItems));
            res.send(thePage);
        })
});

app.get('/myaccount/borrowing', (req, res) => {
    Item.getItemsBorrowed(1)
        .then(myBorrowedItems => {
            const thePage = page(borrowing(myBorrowedItems));
            res.send(thePage);
        })
})


// ====================================================
// Books Page; List and Search
// ====================================================
app.get('/books', (req, res) => {
    Item.getAllItems(1)
        .then((allBooks) => {
            // console.log(allBooks);
            const thePage = page(books(allBooks), "books");
            res.send(thePage);
        })
});

app.post('/books', (req, res) => {
    const search = req.body.search;
    Item.getFilteredItems(1, search)
        .then((allBooks) => {
            console.log(allBooks);
            const thePage = page(books(allBooks), "books");
            res.send(thePage);
        })
});