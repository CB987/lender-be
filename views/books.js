// const db = require('./db');


    


function getAllBooks() {
    return db.any(`
    SELECT i.name, i.keyword, i.available, u.city, u.state
    FROM items i
    INNER JOIN users u
    ON i.owner = u.id
    WHERE category_id = $1
    ` [1]).then(resultsArray => {
            //transform array of objects into array of User instances
            let itemsArray = resultsArray.map(itemObj => {
                let b = (itemObj.name, itemObj.keyword, itemObj.available, itemObj.city, itemObj.state);
                return u;
            });
            return itemsArray;
        });
};

function singleBook(book) {
    // console.log(book[0]);
    return `
    <li>${book.name
        }</li >
        `;
}

function books(allBooks) {
    return `
        <h2>Books and Movies</h2 >
            <br>
                <h3>What would you like to borrow? </h3>
                <form action="" method="POST">
                    <input type="text" name="search" placeholder="moby dick" id="">
                        <input type="submit" value="Find">
    </form>
                        
                        
                            ${allBooks.map(singleBook)}
                        </ul>
                        
                        </div>
                            `
}

module.exports = books;