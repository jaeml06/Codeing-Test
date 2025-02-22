const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number);

arr.sort((prev, cur) => prev - cur)
console.log(arr[k-1])