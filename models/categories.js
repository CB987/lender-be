const db = require('./db');

const bcrypt = require('bcrypt');
const saltRounds = 10;

class Categories{ 
    constructor(id, categoryName){
        this.id = id;
        this.categoryName = categoryName;
    }

// *************************************************
// ITEMS - CRUD
// =================

// RETRIEVE
// =================
//Items category instance method for getting all items in a category
getAllItems() {
    return db.any(`
    SELECT i.name, i.keyword, i.available, u.city, u.state
        FROM items i
    INNER JOIN users u
        ON i.owner = u.id
        WHERE category_id = $1
    `, [this.id]);
};

//Items category instance method for filtering items in category by name/keyword
// getFilteredItems(searchTerm) {
//     return db.any(`
//     SELECT i.name, i.keyword, i.available, u.city, u.state 
//         FROM items i 
//     INNER JOIN users u
//         ON i.owner = u.id
//         WHERE (i.category_id = $1 AND i.name ILIKE $2 OR i.keyword ILIKE $2)
//     `, [this.id, searchTerm])
// };



// UPDATE 
// =================

// DELETE
// =================
};


module.exports = Categories;