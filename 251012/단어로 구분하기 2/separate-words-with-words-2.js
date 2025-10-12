const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[0].split(' ').filter((val, idx) => idx % 2 !== 1)
arr.forEach(val => console.log(val))

