const { header, footer } = require('./helper');



function page(content) {
    return `
    <!DOCTYPE html>
    <html lang="en" class="homepage" >
    

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Lender-be</title>
        <link rel="stylesheet" href="/stylesheets/index.css">
        <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Source+Sans+Pro" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css">
    </head>
    <body>
        ${header()}
        ${content}
        ${footer()}
    </body>
    </html>
`
}

module.exports = page;