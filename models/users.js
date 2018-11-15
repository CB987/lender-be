const db = require('./db');

const bcrypt = require('bcrypt');
const saltRounds = 10;

class User {
    constructor(id, name, username, email, city, state) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.city = city;
        this.state = state;
    }


// CREATE
// =================

static add(name, username, email, city, state){
        return db.one(`
        INSERT INTO users
    	    (name, username, email, city, state)
        VALUES
            ($1, $2, $3, $4, $5)
        returning id
        `, [name, username, email, city, state])
        .then(data => {
            const u = new User(data.id, name, username, email , city, state)
            return u;
        })
    };


// RETRIEVE
// =================
static getUserById(id){
    return db.one(`
        SELECT * FROM users
	        WHERE id = $1
    `, [id])
    .then(result => {
        const u = new User(result.id, result.name, result.username, result.email, result.city, result.state);
        return u;
    })
};  

// UPDATE
// =================
updateUserInfo(name, username, email, city, state){
    this.name = name;
    this.username = username;
    this.email = email;
    this.city = city;
    this.state = state;
    return db.result(`
        UPDATE users
            SET name = $2, username = $3, email = $4, city =  $5, state = $6
            WHERE id = $1;
    `, [this.id, this.name, this.username, this.email, this.city, this.state]);
};

// / DELETE
// =================
delete(){
    return db.one(`
        DELETE FROM users
            WHERE id = $1;
    `, [this.id]);
};

// *************************************************
// USERS - CRUD
// =================



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
// function getAll(){
//     return db.any(`
//         SELECT * FROM items;
//     `);
// };

// ## get items by item/names/keywords ##

// UPDATE 
// =================
// ## update items by id ##

// DELETE
// =================
// ## delete items by id ##
// ## 'on delete cascade'
}

module.exports = User;
