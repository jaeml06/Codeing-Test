const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, b] = input[0].split(' ').map(Number);

console.log(Number(n).toString(b))