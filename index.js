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
const requestItem = require('./views/requestItem');
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
});


// ====================================================
// Home Page
// ====================================================
app.get('/', (req, res) => {
    const thePage = page(homepage());
    res.send(thePage);
});

function protectRoute(req, res, next) {
    let isLoggedIn = req.session.user ? true : false;
    if (isLoggedIn) {
        console.log(req.session.user);
        next();
    } else {
        console.log('not in');
        res.redirect('/login');
    }
};


// ====================================================
// User Registration
// ====================================================
app.get('/register', (req, res) => {
    const theForm = registrationForm();
    const thePage = page(theForm);
    res.send(thePage);
});

app.post('/register', (req, res) => {
    const newUsername = req.body.username;
    // console.log(newUsername);

    User.getByUsername(newUsername)
        .then((doesExist) =>{
            // console.log(doesExist);
            res.send(page(`<h2>Username already exist. Please enter in another Username</h2><br><h4><a href="/register">Return to register</a></h2>`));
        }) 
        .catch(() =>{
            const newPassword = req.body.password;
            const newEmail = req.body.email;
            const newCity = req.body.city;
            const newState = req.body.state;
            const newName = req.body.name;
            User.add(newName, newUsername, newPassword, newEmail, newCity, newState)
                .then((theUser) =>{
                    // console.log(theUser);
                    req.session.user = theUser;
                    req.session.save(() =>{
                        res.redirect('/welcome');
                    });
                })
        })       
});  

app.get('/welcome', protectRoute, (req, res) => {
    // console.log(req.session.user);
    let isLoggedIn = req.session.user ? true : false;
    res.send(page(homepage(), isLoggedIn));
});


// ====================================================
// User Login
// ====================================================
app.get('/login', (req, res) => {
    const theForm = loginForm();
    const thePage = page(theForm);
    res.send(thePage);
});

app.post('/login', (req, res) => {
    const theUsername = req.body.username;
    const thePassword = req.body.password;

    User.getByUsername(theUsername)
        .catch((err) => {
            console.log(err);
            res.send(page(`<h2>Incorrect Username. Please enter in correct Username</h2><br><h4><a href="/login">Return to Login</a></h2>`));
        })
        .then(theUser => {
            if (theUser.passwordDoesMatch(thePassword)) {
                req.session.user = theUser;
                req.session.save(() =>{
                    res.redirect('/welcome');
                });
            } else {
                res.send(page(`<h2>Incorrect Password. Please enter correct Password</h2><br><h4><a href="/login">Return to Login</a></h2>`));
            };
        })
});


// ====================================================
// My Account
// ====================================================
app.get('/myaccount', protectRoute, (req, res) => {
    // console.log(req.session.user.id);
    let isLoggedIn = req.session.user ? true : false;
    res.send(page(myAccount(), isLoggedIn));
})

app.get('/myaccount/owned', protectRoute, (req, res) => {
    // console.log(req.session.user.id);
    Item.getItemsByOwner(req.session.user.id)
        .then(myOwnerItems => {
            // console.log(myOwnerItems);
            let isLoggedIn = req.session.user ? true : false;
            res.send(page(owned(myOwnerItems), isLoggedIn));
        })
});

app.get('/myaccount/borrowing', protectRoute, (req, res) => {
    // console.log(req.session.user.id);
    Item.getItemsBorrowed(req.session.user.id)
        .then((myBorrowedItems) => {
            let isLoggedIn = req.session.user ? true : false;
            res.send(page(borrowing(myBorrowedItems), isLoggedIn));
        })
})

app.get('/myaccount/addItem', protectRoute, (req, res) => {
    let isLoggedIn = req.session.user ? true : false;
    res.send(page(theForm(addItemForm), isLoggedIn));
})


// ================================================================================
// ================================================================================
// ================================================================================
// ================================================================================
app.post('/myaccount/addItem', protectRoute, (req, res) => {

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

app.get('/myaccount/lendItem', protectRoute, (req, res) => {
    let isLoggedIn = req.session.user ? true : false;
    // res.send(page(theForm(lendItemForm), isLoggedIn));

    const theForm = lendItemForm();
    const thePage = page(theForm);
    res.send(thePage, isLoggedIn);
});

app.post('/myaccount/lendItem', protectRoute, (req, res) => {

    const item_id = req.body.item_id;
    const borrower_id = req.body.borrower_id;
    // const owner_id = req.session.user.id;
    Item.updateItemStatus(borrower_id, item_id)
        .then(newItem => {
            res.send(page(`<h2>success! thanks for sharing your stuff!</h2><br><h4><a href="../myaccount">return to my account</a></h4><br><h4><a href="../myaccount/lendItem">lend another item</a></h4>`));
        })
});

app.get('/myaccount/updateMyInfo', protectRoute, (req, res) => {
    let isLoggedIn = req.session.user ? true : false;
    // res.send(page(theForm(updateMyInfo), isLoggedIn));

    const theForm = updateMyInfo();
    const thePage = page(theForm);
    res.send(thePage, isLoggedIn);
});

app.post('/myaccount/updateMyInfo', protectRoute, (req, res) => {

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
// app.get('/myaccount/updateItemInfo', (req, res) => {
//     const theForm = updateItemForm();
//     const thePage = page(theForm);
//     res.send(thePage);
// })

// app.post('/myaccount/updateItemInfo', (req, res) =>{
//     const category_id = req.body.category_id;
//     const name = req.body.name;
//     const keyword = req.body.keyword;
    
// })

app.post('/myaccount/updateItemInfo', protectRoute, (req, res) => {

    const category_id = req.body.category_id;
    const name = req.body.name;
    const keyword = req.body.keyword;
    const owner_id = req.body.owner_id;
    const available = req.body.available;
    
    const updatedItem = new Item(this.id, category_id, name, keyword, owner_id, available)
    updatedItem.updateItemInfo(category_id, name, keyword)
        .then(result => {
            console.log(result)
        });
})


//=================================================
// Books Page; List, Search, Request
//=================================================
app.get('/books', (req, res) => {
    console.log(req.params.id)
    Category.getItemsWithLocation()
        .then((allBooks) => {
            console.log(allBooks);
            const thePage = page(books(allBooks), null, "books");
            res.send(thePage);
        })
});

app.post('/books', (req, res) => {
    const search = req.body.search;
    Category.getFilteredItemsWithLocation(1, search)
        .then((allBooks) => {
            console.log(allBooks);
            const thePage = page(books(allBooks), null, "books");
            res.send(thePage);
        })
});

app.get('/requestItem/:id', protectRoute, (req, res) => {
    let isLoggedIn = req.session.user ? true : false;
    // res.send(page(theForm(requestItem), isLoggedIn));    
    
    const theForm = requestItem(req.params.id);
    const thePage = page(theForm, null, "books");
    res.send(thePage, isLoggedIn);
})

app.post('/requestItem', protectRoute, (req, res) => {

    const requestedItemId = req.body.itemId;
    Item.getItemById(requestedItemId)
        .then(owner_id => {
            User.getUserById(owner_id)
                .then(u => {
                    console.log(u.email);
                })
        })
})

// ==================================================
// Logout
// ==================================================
app.get('/logout', (req, res) => {
    const thePage = logout();
    res.send(page(thePage));
})

app.post('/logout', (req, res) => {
    req.session.destroy(() => {
            res.send(page(`<h2>Thank you for being part of the Lender-Be community!</h2><br><h4><a href="../">return to search</a></h4><h4><a href="./login">return to login</a></h4>`));
    });
});