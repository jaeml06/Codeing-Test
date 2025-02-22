const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0])
const arr = input[1].split(' ').map(val => Number(val));

console.log(arr.sort((prev, cur) => {
    return prev - cur;
}).join(' '))
console.log(arr.sort((prev, cur) => {
    return -(prev - cur);
}).join(' '))