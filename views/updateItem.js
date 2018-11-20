function updateItem(id, name) {
    
    
        return `
        <h2><a href="../myaccount">My Account</a></h2>
            <div class="dropdown">
                <button class="dropbtn">I want to...</button>
                <div class="dropdown-content">
                <a href="./owned">see all my items</a>
                <a href="./borrowing">see items I'm borrowing</a>
                <a href="./addItem">add an item</a>
                <a href="./lendItem">lend item</a>
                <a href="./updateMyInfo">update my personal info</a>
                </div>
            </div>
        <h4>My Lendable Items</h4>
        <h4>Items I'm Borrowing</h4>
        <h4>Add An Item To My Lendable Items</h4>
            <form action="" method="POST">
                <label> Item ID: 
                    <input type="integer" name="itemId" value="${id}" >
                <label> Category:
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
                <label> Item name:
                    <input type="text" name="name" placeholder="${name}">
                </label>
                <label> Item keywords (ex. brand, year, author, search terms):
                    <input type="text" name="keyword">
                </label>
                <input type="submit" value="update item!">
                </label>
            </form>
        <h4>Lend Item</h4>
        <h4>Update Personal Info</h4>
        `;
    
    
    
}

module.exports = updateItem;

