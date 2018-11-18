const Item = require('../models/Item');

function item(object) {
    return `
    <li>
    ${[object.id, object.category_id, object.name, object.keyword, object.owner_id, object.available, object.borrower_id]}
    </li>
    `;
}


function myAccountPage(myOwnerItems) {

    const myItems = myOwnerItems.map(item).join('');
    return `
    <h2><u>My Account</u></h2>
    <br>
    <h4>My Lendable Items</h4>
    <ul action='' method='GET'>
        ${myItems}
    </ul>
    
    <h4>Items I'm Borrowing</h4>
    
    <h4>Add An Item To My Lendable Items</h4>
    
    <h4>Update Item Info</h4>
  
    <h4>Update Personal Info</h4>
   
    `
}

module.exports = myAccountPage;