
function nav() {
    return `
    <nav>
    <a href="http://localhost:4000/logout">Logout</a>
    <a href="http://localhost:4000/">Search</a>
    <a href="http://localhost:4000/myaccount">My Account</a>
    <a href="http://localhost:4000/login">Login</a>
    <a href="http://localhost:4000/register">Register</a>
    </nav>
    `;
}

function header() {
    return `
<header>
<h1><span class="shadow">Lender-Be</span></h1>
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