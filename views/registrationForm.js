function registrationForm() {
	return `
    <form action="" method="POST">
        <label> Your name:
            <input type="text" name="name">
        </label>
        <br> <br>
        <label> Username:
        <input type="text" name="username">
        </label>
        <br> <br>
        <label> Password:
            <input type="password" name="password">
        </label>
        <br> <br>
        <label> Email:
            <input type="email" name="email">
        </label>
        <br> <br>
        <label> City:
            <input type="text" name="city">
        </label>
        <br> <br> 
        <label> State:
            <input type="text" name="state">
        </label>	
        <br> <br>			
        <label>
        <input type="submit" value="Sign Up!">
        </label>
    </form>
    
    `;
}

module.exports = registrationForm;