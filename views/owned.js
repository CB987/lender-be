
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
    <td><button class="aqua"><a href="./updateItemInfo/${object.id}">update item</a></button>
    <td><button class="aqua"><a href="./lendItem">lend item</a></button>
    </tr>`
}

function owned(myOwnerItems) {
    // const myBorrowingItems = borrowingItems.map(item).join('');
    // const myItems = myOwnerItems.map(item).join('');
    return `
    <h2><span class="shadow"><a href="../myaccount">My Account</a></span></h2>
    <div class="dropdown">
            <button class="dropbtn">I want to...</button>
            <div class="dropdown-content">
            <a href="./owned">see all my items</a>
            <a href="./borrowing">see items I'm borrowing</a>
            <a href="./addItem">add an item</a>
            <a href="./updateMyInfo">update my personal info</a>
            </div>
        </div>

    <h4><span class="shadow">My Lendable Items</span></h4>
    <action='' method='GET'>
        <div id="my_items">
            <table class="shadow">
                <tr>
                    <th>Item ID</th>
                    <th>Item Name</th>
                    <th>Keywords</th>
                    <th>Available</th>
                    ${myOwnerItems.map(oneItem => { return itemRow(oneItem) }).join('')} 
                </tr>
            </table>
        </div>
    `
}

module.exports = owned;