const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

const minus = arr.filter(val => val < 0).length
const plus = arr.filter(val => val > 0).length

console.log(Math.max(minus, plus))