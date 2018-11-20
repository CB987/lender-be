function loginForm() {
    return `
    <form action="/login" method="POST">
        <label>
        <span class="shadow">Username:</span>
            <input type="text" name="username">
        </label>
        <br> <br>
        <label>
        <span class="shadow">Password:</span>
            <input type="password" name="password">
        </label>
        <br> <br>
        <input class="aqua" type="submit" value="Login">
    </form>    
    `;
}
module.exports = loginForm; 