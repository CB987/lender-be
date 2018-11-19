function singleBook(book) {
    return `
    <li>Title: ${book.name}, Description: ${book.keyword}, Available: ${book.available}, City: ${book.city}, State: ${book.state}</li>
    `;
}
function books(allBooks) {
    return `
        <h2> Books and Movies</h2 >
            <br>
                <h3>What would you like to borrow? </h3>
                <form action="" method="POST">
                    <input type="text" name="search" placeholder="moby dick" id="">
                        <input type="submit" value="Find">
                </form>
                        <ul>
                            ${allBooks.map(singleBook)}  
                        </ul>
                        <div>
    `}

module.exports = books;

