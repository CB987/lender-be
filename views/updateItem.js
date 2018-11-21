function updateItem(id) {


    return `
        <h2><span class="shadow"><a href="../">My Account</a></span></h2>
            <div class="dropdown">
                <button class="dropbtn">I want to...</button>
                <div class="dropdown-content">
                <a href="../owned">see all my items</a>
                <a href="../borrowing">see items I'm borrowing</a>
                <a href="../addItem">add an item</a>
                <a href="../updateMyInfo">update my personal info</a>
                </div>
            </div><br>
            <h4><span class="shadow">Update Item Info</span></h4><br>
            <form action="" method="POST">
                <label><span class="shadow"> Item ID: </span>
                    <input type="integer" name="itemId" value="${id}" >
                <label> <span class="shadow">Category:</span>
                <select name="category_id">
                    <option value="1">books</option>
                    <option value="2">movies</option>
                    <option value="3">power tools</option>
                    <option value="4">hand tools</option>
                    <option value="5">yard tools</option>
                    <option value="6">kitchen electric appliances</option>
                    <option value="7">kitchen gadgets, non-electric</option>
                    <option value="8">booz</option>
                    <option value="9">craft items</option>
                    <option value="10">costumes, halloween or other</option>
                    <option value="11">decorations/ holiday items</option>
                </select>
                </label>
                <label> <span class="shadow">Item name:</span>
                    <input type="text" name="name" placeholder="">
                </label><br>
                <label> <span class="shadow">Item keywords (ex. brand, year, author, search terms):</span>
                    <input type="text" name="keyword">
                </label>
                <input class="aqua" type="submit" value="update item!">
                </label>
            </form>
        `;
}

module.exports = updateItem;

