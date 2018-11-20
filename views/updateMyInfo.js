function updateMyInfo() {
    return `
    <h2><span class="shadow"><a href="../myaccount">My Account</a></span></h2>
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
    <h4><span class="shadow">Update Personal Info</span></h4>
    <form action="" method="POST">
        <label> <span class="shadow">Your name:</span>
            <input type="text" name="name">
        </label>
        <label> <span class="shadow">Username:</span>
        <input type="text" name="username">
        </label>
        <label> <span class="shadow">Password:</span>
            <input type="password" name="password">
        </label><br>
        <label> <span class="shadow">Email:</span>
            <input type="email" name="email">
        </label>
        <label> <span class="shadow">City:</span>
            <input type="text" name="city">
        </label> 
        <label> <span class="shadow">State:</span>
            <input type="text" name"state">
        </label>				
        <label>
        <input  class="aqua" type="submit" value="update!">
        </label>
    </form>
    `;
}

module.exports = updateMyInfo;