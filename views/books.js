function singleBook(book) {
    return `
    <li>Title: ${book.name}, Description: ${book.keyword}, Available: ${book.available}, City: ${book.city}, State: ${book.state}</li>
    `;
}



function bookRow(book){
    return `
    <tr>
    <td>${book.name}</td>
    <td>${book.keyword}</td>
    <td>${book.available}</td>
    <td>${book.city}</td>
    <td>${book.state}</td>
    </tr>`
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
                        <div id="table_results">
                
                        <table>
                        <tr>
                        <th>Book Name</th>
                        <th>Keywords</th>
                        <th>Available</th>
                        <th>City</th>
                        <th>State</th>
                        
                            ${allBooks.map(oneBook => {return bookRow(oneBook)}).join('')}
                        </table>   
                        </div>
                        <div>

    `}




module.exports = books;

