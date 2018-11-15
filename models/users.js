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


// UPDATE 
// =================

// DELETE
// =================



module.exports = {
    // getAll,
    // addUser,
}