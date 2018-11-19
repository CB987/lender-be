function logout() {
    return `    
    <h4>Are you sure you want to log out?<h4>
    <div>
        <form action="/logout" method="POST">
            <input type="submit" value="logout">
        </form>
    </div>
    `;
}

module.exports = logout;