require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models/db');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const Item = require('./models/Item');
const Category = require('./models/Category');
const User = require('./models/User');

const page = require('./views/page');
const homepage = require('./views/homepage');
const books = require('./views/books');
const registrationForm = require('./views/registrationForm');
const loginForm = require('./views/loginForm');
const myAccount = require('./views/myaccount');
const owned = require('./views/owned');
const borrowing = require('./views/borrowing');
const addItemForm = require('./views/addItem');
const lendItemForm = require('./views/lendItem');
// const updateUserInfo = require('views/updateUserInfo)')

// session modules
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);

app.use(session({
    store: new pgSession({
        pgPromise: db
    }),
    secret: 'abc123kasfsdbukbfrkqwuehnfioaebgfskdfhgcniw3y4fto7scdghlusdhbv',
    saveUninitialized: false
}));

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
            req.session.user = newUser;
            res.redirect('/welcome');
        })
});

app.get('/welcome', (req, res) => {
    // send them to welcome page
    console.log(req.session.user);
    res.send(page(`<h1>Hey ${req.session.user.username}</h1>`))
    // let visitorName = 'Person of the World';
    // if (req.session.user) {
    //     visitorName = req.session.user.username;
    // }
    // res.send(page(`<h1>Hey ${visitorName}</h1>`, 
    // req.session.user));
})



// ====================================================
// User Login
// ====================================================
app.get('/login', (req, res) => {
    const theForm = loginForm();
    const thePage = page(theForm);
    res.send(thePage);
})

app.post('/login', (req, res) => {
    // grab values from form
    const theUsername = req.body.username;
    const thePassword = req.body.password;

    // find the user whose name matches 'theUsername'
    User.getByUsername(theUsername)
        .catch(err => {
            console.log(err);
            res.redirect('/login');
        })
        .then(theUser => {
            if (theUser.passwordDoesMatch(thePassword)) {
                req.session.user = theUser;
                res.redirect('/welcome');
            } else {
                res.redirect('/login');

            }
        })
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

app.get('/myaccount/addItem', (req, res) => {
    const theForm = addItemForm();
    const thePage = page(theForm);
    res.send(thePage);
})

app.post('/myaccount/addItem', (req, res) => {
    const category_id = req.body.category_id;
    const name = req.body.name;
    const keyword = req.body.keyword;
    const owner_id = req.body.owner_id;
    const available = req.body.available;
    Item.addItem(category_id, name, keyword, owner_id, available)
        .then(newItem => {
            res.send(page(`<h2>success! thanks for contributing ${newItem[name]} to the lender-be community!</h2><br><h4><a href="../myaccount">return to my account</a></h2><br><h4><a href="../myaccount/addItem">add another item</a></h4>`));

        })
})

app.get('/myaccount/lendItem', (req, res) => {
    const theForm = lendItemForm();
    const thePage = page(theForm);
    res.send(thePage);
})

app.post('/myaccount/lendItem', (req, res) => {
    const item_id = req.body.item_id;
    const borrower_id = req.body.borrower_id;
    // const owner_id = req.session.user.id;
    Item.updateItemStatus(borrower_id, item_id)
        .then(newItem => {
            res.send(page(`<h2>success! thanks for sharing your stuff!</h2><br><h4><a href="../myaccount">return to my account</a></h2><br><h4><a href="../myaccount/lendItem">lend another item</a></h4>`));

        })
})


// ====================================================
// Books Page; List and Search
// ====================================================
app.get('/books', (req, res) => {
    Category.getItemsWithLocation(1)
        .then((allBooks) => {
            console.log(allBooks);
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
