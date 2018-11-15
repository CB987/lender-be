const {header, footer} = require('./helper');



function categoryPage(){
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lender-be</title>
    <link rel="stylesheet" href="stylesheets/index.css">
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Source+Sans+Pro" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css">
</head>
${header()}

<body>
    <h2>Books and Movies</h2>
    <br>
    <h3>What would you like to borrow? </h3>
 <form action="" method="GET">
    <input type="text" name="search" placeholder="moby dick" id="">
    <input type="submit" value="Find">
 </form>

</body>
${footer()}

</html>
 `   
}

module.exports = categoryPage;