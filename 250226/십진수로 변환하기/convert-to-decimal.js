const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryStr = input[0];

console.log(parseInt(binaryStr, 2).toString(10))