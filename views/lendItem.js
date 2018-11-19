function lendItemForm() {
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
        <h4><a href="./owned">My Lendable Items</a></h4>
        <h4><a href="./borrowing">Items I'm Borrowing</a></h4>
        <h4><a href="./addItem">Add An Item To My Collection</a></h4>
    <h4>Lend Item</h4>
    <form action="" method="POST">
    <label> Item Id number:
        <input type="integer" name="item_id">
    </label>
    <label> Borrower Id number:
        <input type="integer" name="borrower_id">
    </label>
    <label>
    <input type="submit" value="lend item!">
    </label>
</form>
    <h4><a href="./myaccount/updateMyInfo">Update Personal Info</a></h4>
    `;
}

module.exports = lendItemForm;