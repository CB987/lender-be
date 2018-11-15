function book(allbooks) {
    return `
    <h2>Books and Movies</h2>
    <br>
    <h3>What would you like to borrow? </h3>
    <form action="" method="GET">
    <input type="text" name="search" placeholder="moby dick" id="">
    <input type="submit" value="Find">
    </form>
    <ul>${allbooks}</ul>
    <div>
    `
}

module.exports = book;