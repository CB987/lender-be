function getOwnerItems(id) {
    User.getItems
        .then(resultsArray => {
            let myOwnerItems = resultsArray.map(itemObj => {
                let i = new Item(itemObj.id, itemObj.category_id, itemObj.name, itemObj.keyword, itemObj.owner_id, itemObj.available, itemObj.borrower_id);
                return i;
            });
            return myOwnerItems;
        })
};

function myAccountPage(userId) {
    return `
    <h2>My Account</h2>
    <br><br>
    <h4>My Lendable Items</h4>
    <ul action='' method='GET'>
        ${getOwnerItems(userId)}
    </ul>
    <br>
    <h4>Items I'm Borrowing</h4>
    <br>
    <h4>Add An Item To My Lendable Items</h4>
    <br>
    <h4>Update Item Info</h4>
    <br>
    <h4>Update Personal Info</h4>
    <br>
    `;
}