function nav() {
    return `
    <nav>
    <a href="./logout">Logout</a>
    <a href="./myaccount">My Account</a>
    <a href="./login">Login</a>
    <a class = "active" href="./myaccount">Register</a>
    </nav>
    `;
};

function header() {
    return `
<header>
<h1>Lender-Be</h1>
</header>

`;
}

function footer() {
    return `
    <footer>
    <i>"Lend me some sugar; I am your neighbor"</i> --Andre3000/Outkast
    </footer>
    
    
    `;
}

module.exports = {
    header,
    footer,
    nav
};