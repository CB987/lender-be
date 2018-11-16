const db = require('./db');

class Category {
    constructor(id, categoryName) {
        this.id = id;
        this.categoryName = categoryName;
    }
    //============
    //RETRIEVE
    static getAll() {
        return db.any(`
            select * from categories;
        `);
    }

    getById() {
        return db.any(`
            select * from categories where id = $1
        ` [this.id])
            .then(result => {
                const c = new Category(result.id, result.categoryName);
                return c;
            });
    };
}

module.exports = Category;