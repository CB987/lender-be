function myAccount() {
    return `

    <h2><u>My Account</u></h2>
        <div class="dropdown">
            <button class="dropbtn">I want to...</button>
            <div class="dropdown-content">
                <a href="./myaccount/owned">see all my items</a>
                <a href="./myaccount/borrowing">see items I'm borrowing</a>
                <a href="./myaccount/addItem">add an item</a>
                <a href="./myaccount/lendItem">lend item</a>
                <a href="./myaccount/updateMyInfo">update my personal info</a>
            </div>
        </div>
    <h4>My Lendable Items</h4>
    <h4>Items I'm Borrowing</h4>
    <h4>Add An Item To My Lendable Items</h4>
    <h4>Update Item Info</h4>
    <h4>Update Personal Info</h4>
    `;
}

module.exports = myAccount;