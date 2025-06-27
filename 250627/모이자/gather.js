const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let min = Number.MAX_SAFE_INTEGER;
for(let i = 0; i < n; i++){
    let sum = 0;
    for(let j = 0; j < n; j++){
        sum += Math.abs(i - j) * arr[j];
    }

    min = Math.min(sum, min);
}

console.log(min)