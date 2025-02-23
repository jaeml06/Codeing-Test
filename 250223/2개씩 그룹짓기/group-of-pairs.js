const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n').map(val => val.trim( ));

const N = Number(input[0])
const arr = input[1].split(' ').map(Number);
arr.sort((a, b) => a - b)
let max = Number.MIN_SAFE_INTEGER

for(let i = 0; i < N; i++){
    max = Math.max(max, arr[i] + arr[arr.length - i -1])
}

console.log(max)