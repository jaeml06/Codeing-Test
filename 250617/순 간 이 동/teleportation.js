const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b, x, y] = input[0].split(' ').map(Number);

const case1 = Math.abs(a - b);
const case2 = Math.abs(a- x) + Math.abs(y-b);
const case3 = Math.abs(a- y) + Math.abs(b- x)

console.log(Math.min(case1, case2, case3))