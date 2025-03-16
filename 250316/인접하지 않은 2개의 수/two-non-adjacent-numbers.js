const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

let answer = 0

for(let i = 0; i < n; i++){
    const target = arr[i]
    for(let j = i + 2; j < n; j++){
        answer = Math.max(answer, target + arr[j])
    }
}

console.log(answer)