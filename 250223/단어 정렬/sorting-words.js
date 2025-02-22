const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input.slice(1)

console.log(arr.sort().join('\n'))