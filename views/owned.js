
function item(object) {
    return `
    <li>
    ${[object.id, object.category_id, object.name, object.keyword, object.owner_id, object.available, object.borrower_id]}<button><a href="./updateItemInfo">update this item</a></button>
    </li>
    `;
}


function owned(myOwnerItems) {
    // const myBorrowingItems = borrowingItems.map(item).join('');
    const myItems = myOwnerItems.map(item).join('');
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
    <ul action='' method='GET'>
        ${myItems} 
    </ul>
    <h4><a href="./borrowing">Items I'm Borrowing</a></h4>
    </ul>
    <h4><a href="./addItem">Add An Item To My Collection</a></h4>
    
    <h4><a href="./myaccount/lendItem">Lend Item</a></h4>
  
    <h4><a href="./myaccount/updateMyInfo">Update Personal Info</a></h4>
   
    `
}

module.exports = owned;