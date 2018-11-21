function lendItemForm() {
    return `
    <h2><span class="shadow"><a href="../myaccount">My Account</a></span></h2>
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
    <h4><span class="shadow">Lend Item</span></h4>
    <form action="" method="POST">
    <label> <span class="shadow">Item Id number:</span>
        <input type="integer" name="item_id">
    </label>
    <label> <span class="shadow">Borrower Id number:</span>
        <input type="integer" name="borrower_id">
    </label>
    <label>
    <input class="aqua" type="submit" value="lend item!">
    </label>
</form>
    `;
}

module.exports = lendItemForm;