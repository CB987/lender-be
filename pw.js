const bcrypt = require("bcryptjs");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
let hash = bcrypt.hashSync("adnoh", salt);

console.log(hash);
