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
const updateMyInfo = require('./views/updateMyInfo');
const logout = require('./views/logout');
// const updateItemForm = require('./views/updateItem');


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


function protectRoute(req, res, next) {
    let isLoggedIn = req.session.user ? true : false;
    if (isLoggedIn) {
        next();
    } else {
        res.redirect('/login');
    }
}
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
    // console.log(req.body);
    // console.log(newName);
    // console.log(newUsername);
    // console.log(newPassword);
    // console.log(newEmail);
    // console.log(newCity);
    // console.log(newState);

    User.add(newName, newUsername, newPassword, newEmail, newCity, newState)
        .then((newUser) => {
            // console.log(newUser);
            User.getByUsername(newUser.username)
                .catch((err) => {
                    console.log(err);
                    res.send(page(`<h2>Username already exist. Please enter in another Username</h2><br><h4><a href="/register">Return to register</a></h2>`));
                })
            // .then(user =>{
            //     console.log(user);
            // })
            // .catch(duplicate =>{
            //     if (duplicate.username === newUser.username){
            //         console.log("double");
            //     }
            // })
            // .then(username =>{
            //     console.log(username);
            // })

            // if(newUser.username === username){
            //     console.log("there is a double");
            // }
            req.session.user = newUser;
            req.session.save(() => {
                res.redirect('/welcome');
            })
        })
});

app.get('/welcome', (req, res) => {
    // send them to welcome page
    // console.log(req.session.user);
    // User.getByUsername(req.session.user.username)
    // .then((registeredUser) =>{
    // console.log(registeredUser);
    // if (registeredUser === username){
    res.send(page(homepage(`<h3>Hey ${req.session.user.username}</h3>`)));
    // }
})
// let visitorName = 'Person of the World';
// if (req.session.user) {
//     visitorName = req.session.user.username;
// }
// res.send(page(`<h1>Hey ${visitorName}</h1>`, 
// req.session.user));



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
            // const theForm = loginForm();
            // const thePage = page(theForm);
            res.send(page(`<h2>Incorrect Username. Please enter in correct Username</h2><br><h4><a href="/login">Return to Login</a></h2>`));
        })
        .then(theUser => {
            if (theUser.passwordDoesMatch(thePassword)) {
                req.session.user = theUser;
                res.redirect('/welcome');
            } else {
                res.send(page(`<h2>Incorrect Password. Please enter in correct Password</h2><br><h4><a href="/login">Return to Login</a></h2>`));
                // res.redirect('/login');
            }
        })
})
// ====================================================
// My Account
// ====================================================
app.get('/myaccount', protectRoute, (req, res) => {
    // console.log(req.session.user.id);
    const thePage = page(myAccount());
    res.send(thePage);
})

app.get('/myaccount/owned', (req, res) => {
    Item.getItemsByOwner(req.session.user.id)
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
            res.send(page(`<h2>success! thanks for contributing ${name} to the lender-be community!</h2><br><h4><a href="../myaccount">return to my account</a></h2><br><h4><a href="../myaccount/addItem">add another item</a></h4>`));

        })
});

app.get('/myaccount/lendItem', (req, res) => {
    const theForm = lendItemForm();
    const thePage = page(theForm);
    res.send(thePage);
});

app.post('/myaccount/lendItem', (req, res) => {
    const item_id = req.body.item_id;
    const borrower_id = req.body.borrower_id;
    // const owner_id = req.session.user.id;
    Item.updateItemStatus(borrower_id, item_id)
        .then(newItem => {
            res.send(page(`<h2>success! thanks for sharing your stuff!</h2><br><h4><a href="../myaccount">return to my account</a></h4><br><h4><a href="../myaccount/lendItem">lend another item</a></h4>`));
        })
});

app.get('/myaccount/updateMyInfo', (req, res) => {
    const theForm = updateMyInfo();
    const thePage = page(theForm);
    res.send(thePage);
});

app.post('/myaccount/updateMyInfo', (req, res) => {
    const name = req.body.item;
    const username = req.body.username;
    const email = req.body.email;
    const city = req.body.city;
    const state = req.body.state;
    User.updateUserInfo(name, username, email, city, state)
        .then(newUser => {
            res.send(page(`<h2>success! you have successfully updated your info, ${username}!</h2><br><h4><a href="../myaccount">return to my account</a></h4>`));
        })
});

// UPDATE ITEM
app.get('/myaccount/updateItemInfo', (req, res) => {
    const theForm = updateItemForm();
    const thePage = page(theForm);
    res.send(thePage);
})

app.post('/myaccount/updateItemInfo', (req, res) => {
    const category_id = req.body.category_id;
    const name = req.body.name;
    const keyword = req.body.keyword;


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
    Category.getFilteredItemsWithLocation(1, search)
        .then((allBooks) => {
            console.log(allBooks);
            const thePage = page(books(allBooks), "books");
            res.send(thePage);
        })
});

// ====================================================
// Logout
// ====================================================
app.get('/logout', (req, res) => {
    const thePage = logout();
    res.send(page(thePage));
})

app.post('/logout', (req, res) => {
    req.session.destroy(() => {
        req.session = null
    });
    res.send(page(`<h2>Thank you for being part of the Lender-Be community!</h2><br><h4><a href="../">return to search</a></h4><h4><a href="./login">return to login</a></h4>`));
});