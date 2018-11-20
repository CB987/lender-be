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
const updateItem = require('./views/updateItem');
const requestItem = require('./views/requestItem');


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

<<<<<<< HEAD
})
=======
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
>>>>>>> 4f6b3d288ba25e0a6cca68d590f2aaf0f78876fc

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
            res.send(page(`<h2><span class="shadow">Uhoh, that wasn't a known username. <br> Please try again, or register for an account.</span></h2><br><h4><span class="aqua"><a href="/login">Return to Login</a></span></h2><h4><span class="aqua"><a href="/register">Register</a></span></h2>`));
        })
        .then(theUser => {
            if (theUser.passwordDoesMatch(thePassword)) {
                req.session.user = theUser;
                req.session.save(() =>{
                    res.redirect('/welcome');
                });
            } else {
                res.send(page(`<h2><span class="shadow">Oops, that wasn't your password. <br> Please try again, or register for an account.</span></h2><br><h4><span class="aqua"><a href="/login">Return to Login</a></span></h2><h4><span class="aqua"><a href="/register">Register</a></span></h2>`));
            }
        })
});


// ====================================================
// My Account
// ====================================================
app.get('/myaccount', (req, res) => {
    // console.log(req.session.user.id);
    let isLoggedIn = req.session.user ? true : false;
    res.send(page(myAccount(), isLoggedIn));
})

//My Items
app.get('/myaccount/owned', protectRoute, (req, res) => {
    // console.log(req.session.user.id);
    Item.getItemsByOwner(req.session.user.id)
        .then(myOwnerItems => {
            // console.log(myOwnerItems);
            let isLoggedIn = req.session.user ? true : false;
            res.send(page(owned(myOwnerItems), isLoggedIn));
        })
});
// Items I'm Borrowing
app.get('/myaccount/borrowing', protectRoute, (req, res) => {
    // console.log(req.session.user.id);
    Item.getItemsBorrowed(req.session.user.id)
        .then((myBorrowedItems) => {
            let isLoggedIn = req.session.user ? true : false;
            res.send(page(borrowing(myBorrowedItems), isLoggedIn));
        })
})
// Add An Item
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
            res.send(page(`<h2><span class="shadow">success! thanks for contributing ${name} to the lender-be community!</span></h2><br><h4><span class="aqua"><a href="../myaccount">return to my account</a></span></h2><h4><span class="aqua"><a href="../myaccount/addItem">add another item</a></span></h2>`));

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
            res.send(page(`<h2><span class="shadow">success! thanks for sharing your stuff!</span></h2><br><h4><span class="aqua"><a href="../myaccount">return to my account</a></span></h4><br><h4><span class="aqua"><a href="../myaccount/lendItem">lend another item</a></span></h4>`));
        })
});

//Update User Info

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
            res.send(page(`<h2><span class="shadow">success! you have successfully updated your info, ${username}!</span></h2><br><h4><span class="aqua"><a href="../myaccount">return to my account</a></span></h4>`));
        })
});

// Update Item Info
app.get('/myaccount/updateItemInfo/:id', protectRoute, (req, res) => { 
   const theForm = updateItem(req.params.id, req.body.name);
    console.log(req.params.id);
    const thePage = page(theForm);
    res.send(thePage);
})

app.post('/myaccount/updateItemInfo/:id', (req, res) =>{
    const updatedItemId = req.body.itemId;
    const category_id = req.body.category_id;
    const name = req.body.name;
    const keyword = req.body.keyword;
    Item.updateItemInfo(updatedItemId, category_id, name, keyword)
        .then(updatedItem => {
            res.send(page(`<h2>you have successfully updated your item, ${name}!</h2>`))
        })

});

// ====================================================
// Books Page; List and Search
// ====================================================

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
        .then(item => {
            res.send(page(`<h2><span class="shadow">yay! you have successfully requested this item.</span></h2><br><h4><span class="aqua"><a href="../myaccount">go to my account</a></span></h4><h4><span class="aqua"><a href="../..">back to search</a></span></h4>`));
        })
})

// ==================================================
// Logout
// ====================================================
app.get('/logout', (req, res) => {
    const thePage = logout();
    res.send(page(thePage))
})

app.post('/logout', (req, res) => {
    req.session.destroy(() => {
    res.send(page(`<h2><span class="shadow">Thank you for being part of the Lender-Be community!</span></h2><br><h4><span class="aqua"><a href="../">return to search</a></span></h4><h4><span class="aqua"><a href="./login">return to login</a></h4>`))
});