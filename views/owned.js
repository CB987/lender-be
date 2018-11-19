
function item(object) {
    return `
    <li>
    ${[object.id, object.category_id, object.name, object.keyword, object.owner_id, object.available, object.borrower_id]}
    </li>
    `;
}


function owned(myOwnerItems) {
    // const myBorrowingItems = borrowingItems.map(item).join('');
    const myItems = myOwnerItems.map(item).join('');
    return `
    <h2><a href="localhost:4000/myaccount">My Account</a></h2>
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
    <ul action='' method='GET'>
        ${myItems}
    </ul>
    <h4>Items I'm Borrowing</h4>
    </ul>
    <h4>Add An Item To My Lendable Items</h4>
    
    <h4>Update Item Info</h4>
  
    <h4>Update Personal Info</h4>
   
    `
}

module.exports = owned;