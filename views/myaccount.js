function myAccount() {
    return `

    <h2>My Account</h2>
        <div class="dropdown">
            <button class="dropbtn">I want to...</button>
            <div class="dropdown-content">
                <a href="./myaccount/owned">see all my items</a>
                <a href="./myaccount/borrowing">see items I'm borrowing</a>
                <a href="./myaccount/addItem">add an item</a>
                <a href="./myaccount/updateItem">update item info</a>
                <a href="./myaccount/lendItem">lend item</a>
                <a href="./myaccount/updateMyInfo">update my personal info</a>
            </div>
        </div>
    <h4><a href="./myaccount/owned">My Lendable Items</a></h4>
    <h4><a href="./myaccount/borrowing">Items I'm Borrowing</a></h4>
    <h4><a href="./myaccount/addItem">Add An Item To My Collection</a></h4>
    <h4><a href="./myaccount/lendItem">Lend Item</a></h4>
    <h4><a href="./myaccount/updateMyInfo">Update Personal Info</a></h4>
    `;
}

module.exports = myAccount;