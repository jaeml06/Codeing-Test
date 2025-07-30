const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].trim().split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

const temp = Array(n+1).fill(0);
temp[0] = arr[0]
for(let i = 1; i < n+1; i++){
    temp[i] = temp[i-1] + arr[i];
}

let max = Number.MIN_SAFE_INTEGER;
for(let i = k; i < n; i++){
    max = Math.max(max, temp[i] - temp[i-k]);
}

console.log(max)