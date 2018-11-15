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
// ###THINK ABOUT IT###
// not sure if we will ever need to display the whole array of users
// function getAll(){
//     return db.any(`
//         SELECT * FROM users;
//     `);
// };

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
// function getAll(){
//     return db.any(`
//         SELECT * FROM items;
//     `);
// };

// UPDATE 
// =================

// DELETE
// =================


module.exports = {
    // getAll
    addUser
}