const db = require('./db');

class Item {
    constructor(id, category_id, name, keyword, owner_id, available, borrower_id) {
        this.id = id;
        this.category_id = category_id;
        this.name = name;
        this.keyword = keyword;
        this.owner_id = owner_id;
        this.available = available;
        this.borrower_id = borrower_id;
    }

    // *************************************************
    // ITEMS - CRUD
    // =================

    // RETRIEVE
    // =================
    //Items category instance method for getting all items in a category
    static getAllItems() {
        return db.any(`
    Select * from items
    `,)
            .then(resultsArray => {
                // console.log(resultsArray);
                //transform array of objects into array of User instances
                let itemsArray = resultsArray.map(itemObj => {
                    let i = new Item(itemObj.id, itemObj.category_id, itemObj.name, itemObj.keyword, itemObj.owner_id, itemObj.available, itemObj.borrower_id);
                    return i;
                });
                return itemsArray;
            })
            .catch(err => {
                console.log(err)
            })
    };

    static getAllItemsfromCategory(category_id) {
        return db.any(`
    Select * from items where category_id = $1
    `, [category_id])
            .then(resultsArray => {
                // console.log(resultsArray);
                // transform array of objects into array of User instances
                let itemsArray = resultsArray.map(itemObj => {
                    let i = new Item(itemObj.id, itemObj.name, itemObj.keyword, itemObj.available);
                    return i;
                });
                return itemsArray;
            })
            .catch(err => {
                console.log(err)
            })
    };

    //Items category instance method for filtering items in category by name/keyword
    getFilteredItems(category_id, searchTerm) {
        return db.any(`
    SELECT i.name, i.keyword, i.available, u.city, u.state 
        FROM items i 
    INNER JOIN users u
        ON i.owner = u.id
        WHERE (i.category_id = $1 AND i.name ILIKE $2 OR i.keyword ILIKE $2)
    `, [category_id, searchTerm])
    };
};


module.exports = Item;