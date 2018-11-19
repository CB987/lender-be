const db = require('./db');

const bcrypt = require('bcrypt');
const saltRounds = 10;

class User {
    constructor(id, name, username, pwhash, email, city, state) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.pwhash = pwhash;
        this.email = email;
        this.city = city;
        this.state = state;
    }

    // Register
    static add(name, username, password, email, city, state) {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        return db.one(`
        INSERT INTO users
    	    (name, username, pwhash, email, city, state)
        VALUES
            ($1, $2, $3, $4, $5, $6)
        returning id
        `, [name, username, hash, email, city, state])
            .then(data => {
                const u = new User(data.id, name, username, hash, email, city, state)
                return u;
            })
    };

    // RETRIEVE
    // =================
    static getUserById(id) {
        return db.one(`
        SELECT * FROM users
	        WHERE id = $1
    `, [id])
            .then(result => {
                const u = new User(result.id, result.name, result.username, result.email, result.city, result.state);
                return u;
            })
    };

    static getByUsername(username) {
        return db.one(`
            select * from users
            where username = $1          
        `, [username])
        .then(result => {
            return new User(result.id, result.name, result.username, result.pwhash, result.email, result.city, result.state);
        })
    }

    passwordDoesMatch(thePassword) {
        const didMatch = bcrypt.compareSync(thePassword, this.pwhash);
        return didMatch;
    }

    getItems(id) {
        return db.any(`
        SELECT * 
        FROM items
        WHERE owner = $1
    `, [id])
    };

    // UPDATE
    // =================
    updateUserInfo(name, username, email, city, state) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.city = city;
        this.state = state;
        return db.result(`
        UPDATE users
            SET name = $2, username = $3, email = $4, city =  $5, state = $6
            WHERE id = $1;
    `, [this.id, this.name, this.username, this.email, this.city, this.state]);
    };


    // / DELETE
    // =================
    delete() {
        return db.one(`
        DELETE FROM users
            WHERE id = $1;
    `, [this.id]);
    };


}

module.exports = User;
