function addItemForm() {
    return `
    <h2><u>My Account</u></h2>
        <div class="dropdown">
            <button class="dropbtn">I want to...</button>
            <div class="dropdown-content">
                <a href="./owned">see all my items</a>
                <a href="./borrowing">see items I'm borrowing</a>
                <a href="./addItem">add an item</a>
                <a href="./updateItem">update item info</a>
                <a href="./updateMyInfo">update my personal info</a>
            </div>
        </div>
    <h4>My Lendable Items</h4>
    <h4>Items I'm Borrowing</h4>
    <h4>Add An Item To My Lendable Items</h4>
        <form action="" method="POST">
            <label> Your name:
                <input type="text" name="name">
            </label>
            <br> <br>
            <label> Username:
            <input type="text" name="username">
            </label>
            <label>
            <input type="submit" value="add item!">
            </label>
        </form>
    <h4>Update Item Info</h4>
    <h4>Update Personal Info</h4>
    `;
}

module.exports = addItemForm