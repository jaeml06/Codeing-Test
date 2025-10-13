const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const string = [...input[0]]
const n = Number(input[1])

string.reverse()
console.log(string.slice(0, n).join(''))
