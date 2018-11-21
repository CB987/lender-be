const db = require('./db');
const Item = require('./Item');

class Category {
    constructor(id, categoryname) {
        this.id = id;
        this.categoryname = categoryname;
    }
    //============
    //RETRIEVE
    static getAll() {
        return db.any(`
            select * from categories;
        `);
    }

    static getById(id) {
        return db.any(`
            select * from categories where id = $1`, [id])
            .then(result => {
                let c = new Category(result[0].id, result[0].categoryname);
                return c;
                // console.log(c);
            })

    };

    static getItemsWithLocation(id) {
        return db.any(`
        select i.id, i.name, i.keyword, i.available, u.city, u.state
	from items i
	inner join users u
	on i.owner_id = u.id
	where i.category_id = $1
        `, [id])
            .then(resultsArray => {
                // console.log(resultsArray);
                //transform array of objects into array of Cat instances
                let itemsArray = resultsArray.map(itemObj => {
                    let i = new Item(itemObj.id, itemObj.category_id, itemObj.name, itemObj.keyword, itemObj.owner_id, itemObj.available, itemObj.borrower_id);
                    i.city = itemObj.city;
                    i.state = itemObj.state;
                    return i;
                });
                return itemsArray;
            })
    }

    static getFilteredItemsWithLocation(id, search) {
        return db.any(`
        select i.name, i.keyword, i.available, u.city, u.state
	from items i
	inner join users u
	on i.owner_id = u.id
	where (i.category_id = $1 and i.name ilike '%$2:raw%' or i.keyword ilike '%$2:raw%')
        `, [id, search])
            .then(resultsArray => {
                // console.log(resultsArray);
                //transform array of objects into array of Cat instances
                let itemsArray = resultsArray.map(itemObj => {
                    let i = new Item(itemObj.id, itemObj.category_id, itemObj.name, itemObj.keyword, itemObj.owner_id, itemObj.available, itemObj.borrower_id);
                    i.city = itemObj.city;
                    i.state = itemObj.state;
                    return i;
                });
                return itemsArray;
            })
    }

}

module.exports = Category;