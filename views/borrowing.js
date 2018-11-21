
function item(object) {
    return `
    <li> Title: ${object.name}, Owner ID: ${object.owner_id}</li>
    `;
}

function itemRow(object) {
    return `
        <tr>
            <td>${object.name}</td>
            <td>${object.owner_id}</td>
        </tr>
    `;
}

function borrowing(myBorrowedItems) {
    // const myBorrowingItems = borrowingItems.map(item).join('');
    const myItems = myBorrowedItems.map(item).join('');
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
    <h4><span class="shadow">Items I'm Borrowing</span></h4>
    <div id="table_results">
        <table class="shadow">
            <tr>    
                <th> Item Name </th>
                <th> Owner ID </th>
                ${myBorrowedItems.map(oneItem => { return itemRow(oneItem) }).join('')}
            </tr>
        </table>
    </div>
    `
}

module.exports = borrowing;