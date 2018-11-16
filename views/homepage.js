

function homepage() {
    return `
  
        <h2>What would you like to borrow?</h2>
        <br>
        <div class="dropdown">
            <button class="dropbtn">Borrow</button>
            <div class="dropdown-content">
                <a href="#">Books</a>
                <a href="#">Movies</a>
                <a href="#">HandTools</a>
            </div>
        </div> 
    
    `;
}

module.exports = homepage;

