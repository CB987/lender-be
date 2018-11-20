// const User = require('./models/User');

// function getEmailforItemRequest() {
//     Item.getItemById(id)
//         .then(owner_id => {
//             User.getUserById(owner_id)
//             return u.email;
//         })
// }


function requestItem() {
    return `
    <form action="" method="POST">
        <label>Item ID:
            <input type="integer" name="itemId">
        </label>
        <label>Item name:
            <input type="text" name="name">
        </label>
        <label>
            <input type="submit" value="request item!">
        </label>
    </form>
    `;
}
//then it somehow emails the item owner
module.exports = requestItem;