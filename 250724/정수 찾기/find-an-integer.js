const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr1 = input[1].trim().split(' ').map(Number);
const m = Number(input[2]);
const arr2 = input[3].trim().split(' ').map(Number);
const temp1 = new Set(arr1);
const temp2 = new Set(arr2);

for (const val of temp2) {
  console.log(temp1.has(val) ? 1 : 0);
}