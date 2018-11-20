function logout() {
    return `    
    <h4><span class="shadow">Are you sure you want to log out?</span><h4>
    <div>
        <form action="/logout" method="POST">
            <input class="aqua" type="submit" value="logout">
        </form>
    </div>
    `;
}

module.exports = logout;