function registrationForm() {
    return `
    <h2><span class="shadow">Registration</span></h2>
    <br>
    <form action="" method="POST">
        <label><span class="shadow"> Your name:</span>
            <input type="text" name="name">
        </label>
        <br> <br>
        <label> <span class="shadow">Username:</span>
        <input type="text" name="username">
        </label>
        <br> <br>
        <label><span class="shadow"> Password:</span>
            <input type="password" name="password">
        </label>
        <br> <br>
        <label> <span class="shadow">Email:</span>
            <input type="email" name="email">
        </label>
        <br> <br>
        <label> <span class="shadow">City:</span>
            <input type="text" name="city">
        </label>
        <br> <br> 
        <label> <span class="shadow">State:</span>
            <input type="text" name="state">
        </label>	
        <br> <br>			
        <label>
        <input type="submit" value="Sign Up!" class="aqua">
        </label>
    </form>
    
    `;
}

module.exports = registrationForm;