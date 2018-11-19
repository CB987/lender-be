
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
    <ol action='' method='GET'>
        ${myItems} 
    </ol>
    <h4>Items I'm Borrowing</h4>
    </ul>
    <h4>Add An Item To My Lendable Items</h4>
    
    <h4>Lend Item</h4>
  
    <h4>Update Personal Info</h4>
   
    `
}

module.exports = owned;