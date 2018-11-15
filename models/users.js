const db = require('./db');

const bcrypt = require('bcrypt');
const saltRounds = 10;


// *************************************************
// USERS - CRUD
// =================

// CREATE
// =================
// function addUser(name, username, email, city, state){
//     return db.one(`
//     INSERT INTO users
// 	    (name, username, email, city, state)
//     VALUES
//         ($1, $2, $3, $4, $5)
//     returning id
//     `, [name, username, email, city, state]);
// };

// RETRIEVE
// =================
// function getUserById(id){
//     return db.one(`
//         SELECT * FROM users
// 	        WHERE id = $1
//     `, [id]);
// };

// ###THINK ABOUT IT###
// not sure if we will ever need to display the whole array of users
// function getAll(){
//     return db.any(`
//         SELECT * FROM users;
//     `);
// };

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

module.exports = {
    // getAll,
    // addUser,
    getUserById
}