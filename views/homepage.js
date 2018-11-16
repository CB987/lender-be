function homepage() {
    return `
        <html class="homepage">
        <h2>What would you like to borrow?</h2>
        <br>
        <div class="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
                <a href="#">'./books'</a>
                <a href="#">'./movies'</a>
                <a href="#">'./handTools'</a>
            </div>
        </div>
    
    `;
}

module.exports = homepage;