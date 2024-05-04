const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const len = input.shift();

input.sort((a, b) => Number(a.split(' ')[0]) - Number(b.split(' ')[0]));

console.log(input.join("\n"));