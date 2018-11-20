
function addItemForm(owner_id) {
    return `
    <h2><a href="../myaccount"><span class="shadow">My Account</span></a></h2>
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
        <form action="" method="POST">
            <label class="shadow"> Category:
            <select name="category_id">
                <option value="1">books</option>
                <option value="2">movies</option>
                <option value="3">power tools</option>
                <option value="4">hand tools</option>
                <option value="5">yard tools</option>
                <option value="6">kitchen electric appliances</option>
                <option value="7">kitchen gadgets, non-electric</option>
                <option value="8">booze</option>
                <option value="9">craft items</option>
                <option value="10">costumes, halloween or other</option>
                <option value="11">decorations/ holiday items</option>
            </select>
            </label>
            <label class="shadow"> Item name:
                <input type="text" name="name">
            </label><br>
            <label class="shadow"> Item keywords (ex. brand, year, author, search terms):
                <input type="text" name="keyword">
            </label><br>
            <label class="shadow"> Your id number:
                <input type="integer" name="owner_id" value="${owner_id}">
            </label>
            <label class="shadow"> Available:
                <select>
                    <option value="true">yes</option>
                    <option value="false">no</option>
                </select>
            </label>
            <label class="aqua">
            <input type="submit" value="add item!">
            </label>
        </form>
    `;
}

module.exports = addItemForm;