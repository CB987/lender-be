function myAccount() {
    return `
    
        <h2><span class="shadow">My Account</span></h2>
            <div class="dropdown">
                <button class="dropbtn">I want to...</button>
                <div class="dropdown-content">
                    <a href="/myaccount/owned">see all my items</a>
                    <a href="/myaccount/borrowing">see items I'm borrowing</a>
                    <a href="/myaccount/addItem">add an item</a>
                    <a href="/myaccount/updateMyInfo">update my info</a>
                </div>
            </div>
        `;
}

module.exports = myAccount;