// const User = require('./models/User');

// function getEmailforItemRequest() {
//     Item.getItemById(id)
//         .then(owner_id => {
//             User.getUserById(owner_id)
//             return u.email;
//         })
// }


function requestItem(id, name) {
    return `
    <h2><span class="shadow"> Confirm your request for: </span></h2>
    <form action="" method="POST">
        <label> <span class="shadow">Item ID:</span>
            <input type="integer" name="itemId" value="${id}" readonly>
        </label>
        <label><span class="shadow">Item name:</span>
            <input type="text" name="name" value=${name}>
        </label>
        <label>
            <input class="aqua" type="submit" value="request item!">
        </label>
    </form>
    `;
}
//then it somehow emails the item owner
module.exports = requestItem;