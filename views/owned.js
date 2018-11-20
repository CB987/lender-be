
function item(object) {
    return `
    <li>
    ${[object.id, object.category_id, object.name, object.keyword, object.owner_id, object.available, object.borrower_id]}<button><a href="./updateItemInfo">update this item</a></button>
    </li>
    `;
}

function itemRow(object) {
    return `
    <tr>
    <td>${object.id}</td>
    <td>${object.name}</td>
    <td>${object.keyword}</td>
    <td>${object.available}</td>
    <td><button><a href="./updateItemInfo">update item</a></button>
    <td><button><a href="./lendItem">lend item</a></button>
    </tr>`
}

function owned(myOwnerItems) {
    // const myBorrowingItems = borrowingItems.map(item).join('');
    // const myItems = myOwnerItems.map(item).join('');
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
    <action='' method='GET'>
        <div id="my_items">
            <table class="shadow">
                <tr>
                    <th>Item no</th>
                    <th>Book Name</th>
                    <th>Keywords</th>
                    <th>Available</th>
                    ${myOwnerItems.map(oneItem => { return itemRow(oneItem) }).join('')} 
                </tr>
            </table>
        </div>
    
    </ul>
    <h4><a href="./borrowing">Items I'm Borrowing</a></h4>
    </ul>
    <h4><a href="./addItem">Add An Item To My Collection</a></h4>
    
    <h4><a href="./lendItem">Lend Item</a></h4>
  
    <h4><a href="./updateMyInfo">Update Personal Info</a></h4>
   
    `
}

module.exports = owned;