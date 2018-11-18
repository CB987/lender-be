function loginForm() {
    return `
    <form action="/login" method="POST">
        <label>
            Username:
            <input type="text" name="username">
        </label>
        <br> <br>
        <label>
            Password:
            <input type="password" name="password">
        </label>
        <br> <br>
        <input type="submit" value="Login">
    </form>    
    `;
}
 module.exports = loginForm; 