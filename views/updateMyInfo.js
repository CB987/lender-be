function updateMyInfo() {
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
        <h4><a href="./owned">My Lendable Items</a></h4>
        <h4><a href="./borrowing">Items I'm Borrowing</a></h4>
        <h4><a href="./addItem">Add An Item To My Collection</a></h4>
        <h4><a href="./myaccount/lendItem">Lend Item</a></h4>
    <h4>Update Personal Info</h4>
    <form action="" method="POST">
        <label> Your name:
            <input type="text" name="name">
        </label>
        <label> Username:
        <input type="text" name="username">
        </label>
        <label> Password:
            <input type="password" name="password">
        </label><br>
        <label> Email:
            <input type="email" name="email">
        </label>
        <label> City:
            <input type="text" name="city">
        </label> 
        <label> State:
            <input type="text" name"state">
        </label>				
        <label>
        <input type="submit" value="update!">
        </label>
    </form>
    `;
}

module.exports = updateMyInfo;