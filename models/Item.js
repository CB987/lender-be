const db = require('./db');

class Item {
    constructor(id, name, keyword, available) {
        this.id = id;
        this.name = name;
        this.keyword = keyword;
        this.available = available;
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