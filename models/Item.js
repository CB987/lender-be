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

    //CREATE
    //==================
    static addItem(category_id, name, keyword, owner_id, available) {
        return db.one(`
            INSERT INTO items
                (category_id, name, keyword, owner_id, available)
            VALUES
                ($1, $2, $3, $4, $5)
            returning id
            `, [category_id, name, keyword, owner_id, available]);
    };

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
    };

    static getCategoryItems(category_id) {
        return db.any(`
    Select * from items where category_id = $1
    `, [category_id])
        return db.any(`
    SELECT i.name, i.keyword, i.available, u.city, u.state 
        FROM items i 
    INNER JOIN users u
        ON i.owner_id = u.id
        WHERE i.category_id
    `, [category_id])
    }

    //Items category instance method for filtering items in category by name/keyword
    static getFilteredItems(category_id, searchTerm) {
        return db.any(`
    SELECT i.name, i.keyword, i.available, u.city, u.state 
        FROM items i 
    INNER JOIN users u
        ON i.owner_id = u.id
        WHERE (i.category_id = $1 AND i.name ILIKE '%$2:raw%' OR i.keyword ILIKE '%$2:raw%')
    `, [category_id, searchTerm])
    };

    static getItemsByOwner(id) {
        return db.any(`
        SELECT * 
        FROM items
        WHERE owner_id = $1
    `, [id]).then(resultsArray => {
                let myOwnerItems = resultsArray.map(itemObj => {
                    let i = new Item(itemObj.id, itemObj.category_id, itemObj.name, itemObj.keyword, itemObj.owner_id, itemObj.available, itemObj.borrower_id);
                    return i;
                });
                return myOwnerItems;

            })
    };

    static getItemsBorrowed(id) {
        return db.any(`
        SELECT name, owner_id
        FROM items
        WHERE borrower_id = $1
        `, [id]).then(resultsArray => {
                let myBorrowedItems = resultsArray.map(itemObj => {
                    let i = new Item(itemObj.id, itemObj.category_id, itemObj.name, itemObj.keyword, itemObj.owner_id, itemObj.available, itemObj.borrower_id);
                    return i;
                });
                return myBorrowedItems;
            })
    };

    static getItemById(id) {
        return db.one(`
        select * from items where id = $1
        `, [id]).then(itemObj => {
                const i = new Item(itemObj.id, itemObj.category_id, itemObj.name, itemObj.keyword, itemObj.owner_id, itemObj.available, itemObj.borrower_id);
                return itemObj.owner_id
            })
    }


    // UPDATE
    // =================
    //Item instance method for setting an item to unavailable
    static updateItemStatus(borrower_id, id) {
        return db.result(`
UPDATE items
SET available = false, borrower_id = $1
WHERE id = $2
`, [borrower_id, id])
    };

    //     static updateItemStatus(borrower_id, id, owner_id) {
    //         return db.result(`
    // UPDATE items
    // SET available = false, borrower_id = $1
    // WHERE (id = $2 and owner=$3)
    // `, [borrower_id, id, owner_id])
    //     };

    //Item instance method for updating item info
    static updateItemInfo(id, category_id, name, keyword) {
        return db.result(`
   UPDATE items
   SET category_id = $2, name =$3, keyword = $4
   WHERE id = $1
`, [id, category_id, name, keyword]);
    };
};

module.exports = Item;