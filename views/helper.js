
function nav(isLoggedIn) {
    if (isLoggedIn){
        return `
        <nav>
        <a href="/logout">Logout</a>
        <a href="/">Search</a>
        <a href="/myaccount">My Account</a>
        </nav>
        `;
    }else{
        return `
        <nav>
        <a href="/">Search</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        </nav>
        `;
    }
}

function header() {
    return `
<header>
<h1><span class="shadow-border">Lender-Be</span></h1>
</header>

`;
}

function footer() {
    return `
    <footer>
    <span class="shadow"><i>"Lend me some sugar; I am your neighbor"</i> --Andre3000/Outkast</span> 
    </footer>
    
    
    `;
}

module.exports = {
    header,
    footer,
    nav
};