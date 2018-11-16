// function backgroundImage() {
//     document.body.style.backgroundImage = 'url(images/books-home.jpg)'
// }

function homepage() {
    // backgroundImage();
    return `

<h2>What would you like to borrow?</h2>
    <br>
        <div class="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
                <a href="./books">books</a>
                <a href="./books">movies</a>
                <a href="./tools">hand tools</a>
            </div>
        </div>

        `;
}

module.exports = homepage; 