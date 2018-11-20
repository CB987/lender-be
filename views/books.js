function singleBook(book) {
    return `
    <li>Title: ${book.name}, Description: ${book.keyword}, Available: ${book.available}, City: ${book.city}, State: ${book.state}</li>
    `;
}



function bookRow(book) {
    return `
    <tr>
    <td>${book.name}</td>
    <td>${book.keyword}</td>
    <td>${book.available}</td>
    <td>${book.city}</td>
    <td>${book.state}</td>
    <td><button class="aqua"><a href="./requestItem/${book.id}">request</a></button></td>
    </tr>`
}

function books(allBooks) {
    return `
        <h2><span class="shadow">Books and Movies</span></h2 >

            <br>
                <h3><span class="shadow">What would you like to borrow?</span></h3>
                <form action="" method="POST">
                    <input type="text" name="search" placeholder="title or keyword" id="">
                        <input class="aqua" type="submit" value="Find">
                </form>
                    <div id="table_results">
                        <table class="shadow">
                            <tr>
                                <th>Book Name</th>
                                <th>Keywords</th>
                                <th>Available</th>
                                <th>City</th>
                                <th>State</th>
                                ${allBooks.map(oneBook => { return bookRow(oneBook) }).join('')}
                            </tr>
                        </table>   
                    </div>
    `}




module.exports = books;

