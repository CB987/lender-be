function homepage(user) {
    return `

<h2><span class="shadow">What would you like to borrow?</span></h2>
    <br>
        <div class="dropdown">
            <button class="dropbtn">Borrow</button>
            <div class="dropdown-content">
                <a href="./books">books</a>
                <a href="./books">movies</a>
                <a href="./tools">hand tools</a>
            </div>
        </div>
    `;
}

module.exports = homepage;