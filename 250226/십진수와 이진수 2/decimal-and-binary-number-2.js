const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0];

console.log((Number(parseInt(binaryInput, 2).toString(10)) * 17).toString(2))