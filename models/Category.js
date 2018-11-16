const db = require('./db');

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
}

module.exports = Category;