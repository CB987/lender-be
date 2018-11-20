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
            .catch((err) =>{
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
        req.session.save(() =>{
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
    req.session.save()
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
            res.send(page(`<h2><span class="shadow">Uhoh, that wasn't a known username. <br> Please try again, or register for an account.</span></h2><br><h4><span class="aqua"><a href="/login">Return to Login</a></span></h2><h4><span class="aqua"><a href="/register">Register</a></span></h2>`));
        })
        .then(theUser => {
            if (theUser.passwordDoesMatch(thePassword)) {
                req.session.user = theUser;
                res.redirect('/');
            } else {
                res.send(page(`<h2><span class="shadow">Oops, that wasn't your password. <br> Please try again, or register for an account.</span></h2><br><h4><span class="aqua"><a href="/login">Return to Login</a></span></h2><h4><span class="aqua"><a href="/register">Register</a></span></h2>`));
                // res.redirect('/login');
            }
        })
})
// ====================================================
// My Account
// ====================================================
app.get('/myaccount', (req, res) => {
    // console.log(req.session.user.id);
    const thePage = page(myAccount());
    res.send(thePage);
})

//My Items
app.get('/myaccount/owned', (req, res) => {
    Item.getItemsByOwner(req.session.user.id)
        .then(myOwnerItems => {
            // const myItems = myOwnerItems.map(item).join('');
            // console.log(myOwnerItems);
            const thePage = page(owned(myOwnerItems));
            res.send(thePage);
        })
});

// Items I'm Borrowing
app.get('/myaccount/borrowing', (req, res) => {
    Item.getItemsBorrowed(req.session.user.id)
        .then(myBorrowedItems => {
            const thePage = page(borrowing(myBorrowedItems));
            res.send(thePage);
        })
})

// Add An Item
app.get('/myaccount/addItem', (req, res) => {
    const theForm = addItemForm(req.session.user.id);
    console.log(req.session.user.id);
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
            res.send(page(`<h2><span class="shadow">success! thanks for contributing ${name} to the lender-be community!</span></h2><br><h4><span class="aqua"><a href="../myaccount">return to my account</a></span></h2><h4><span class="aqua"><a href="../myaccount/addItem">add another item</a></span></h2>`));

        })
});

//Lend Item
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
            res.send(page(`<h2><span class="shadow">success! thanks for sharing your stuff!</span></h2><br><h4><span class="aqua"><a href="../myaccount">return to my account</a></span></h4><br><h4><span class="aqua"><a href="../myaccount/lendItem">lend another item</a></span></h4>`));
        })
});
// UPDATE USER

//Update User Info
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
            res.send(page(`<h2><span class="shadow">success! you have successfully updated your info, ${username}!</span></h2><br><h4><span class="aqua"><a href="../myaccount">return to my account</a></span></h4>`));
        })
});

// Update Item Info
app.get('/myaccount/updateItemInfo/:id', (req, res) => {
    
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
// REQUEST ITEM
app.get('/requestItem/:id', protectRoute, (req, res) => {
    
    const theForm = requestItem(req.params.id);
    const thePage = page(theForm, "books");
    res.send(thePage);
})

app.post('/requestItem', (req, res) => {
    const requestedItemId = req.body.itemId;
    Item.getItemById(requestedItemId)
        .then(owner_id => {
            User.getUserById(owner_id)
                .then(u => {
                    console.log(u.email);
                })
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
    Category.getFilteredItemsWithLocation(1, search)
        .then((allBooks) => {
            console.log(allBooks);
            const thePage = page(books(allBooks), "books");
            res.send(thePage);
        })
});

app.get('/requestItem/:id/:name', protectRoute, (req, res) => {
    const theForm = requestItem(req.params.id, req.params.name);
    const thePage = page(theForm, "books");
    res.send(thePage);
})

app.post('/requestItem/:id', (req, res) => {
    const requestedItemId = req.body.itemId;
    Item.getItemById(requestedItemId)
        .then(item => {
            res.send(page(`<h2><span class="shadow">yay! you have successfully requested this item.</span></h2><br><h4><span class="aqua"><a href="../myaccount">go to my account</a></span></h4><h4><span class="aqua"><a href="../..">back to search</a></span></h4>`));
        })
    // .then(owner_id => {
    //     User.getUserById(owner_id)
    //         .then(u => {
    //             console.log(u.email);
    //         })
    // })
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
        req.session = null
    })
    res.send(page(`<h2><span class="shadow">Thank you for being part of the Lender-Be community!</span></h2><br><h4><span class="aqua"><a href="../">return to search</a></span></h4><h4><span class="aqua"><a href="./login">return to login</a></h4>`))
});