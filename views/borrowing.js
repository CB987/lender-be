
function item(object) {
    return `
    <li>
    ${[object.name, object.owner_id]}
    </li>
    `;
}


function borrowing(myBorrowedItems) {
    // const myBorrowingItems = borrowingItems.map(item).join('');
    const myItems = myBorrowedItems.map(item).join('');
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
    
    <h4>Items I'm Borrowing</h4>
    <ul action='' method='GET'>
        ${myItems}
    </ul>
    <h4><a href="./addItem">Add An Item To My Collection</a></h4>
    
    <h4><a href="./lendItem">Lend Item</a></h4>
  
    <h4><a href="./updateMyInfo">Update Personal Info</a></h4>
   
    `
}

module.exports = borrowing;