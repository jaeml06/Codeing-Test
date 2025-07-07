const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const blocks = input.slice(1, n + 1).map(Number);
const [s1, e1] = input[n + 1].split(' ').map(Number);
const [s2, e2] = input[n + 2].split(' ').map(Number);

blocks.splice(s1 - 1, e1 - s1 + 1);
blocks.splice(s2-1, e2- s2 + 1);
console.log(blocks.length)
blocks.forEach(val => console.log(val))