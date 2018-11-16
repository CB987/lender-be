function homepage() {
    return `

<h2>What would you like to borrow?</h2>
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