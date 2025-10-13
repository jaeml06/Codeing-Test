const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

[...input[0]].forEach(val => console.log(val))