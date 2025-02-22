const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');
const arr = [...input[0]]

console.log(arr.sort().join(''))