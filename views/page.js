const { header, footer, nav } = require('./helper');




function page(content, isLoggedIn = false, className = "handshake") {
    return `
    <!DOCTYPE html>
    <html lang="en" class="${className}">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lender-be</title>
    <link rel="stylesheet" href="/stylesheets/index.css">
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Source+Sans+Pro" rel="stylesheet">
    <link href="./clusterize.css" rel="stylesheet">
    </head>
    <body>
        ${nav(isLoggedIn)}
        ${header()}
        ${content}
        <div class="footer">
        ${footer()}
        </div>
    <script src="/index.js"></script>
    </body>
    </html>
    `;
}

module.exports = page;