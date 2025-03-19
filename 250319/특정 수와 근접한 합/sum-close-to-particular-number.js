const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const totalSum = arr.reduce((prev, cur) => {
    return prev + cur
}, 0);

let answer = Number.MAX_SAFE_INTEGER

for(let i = 0; i < n; i++){
    for(let j = i + 1; j < n; j++){
        answer = Math.min(answer, Math.abs(s - (totalSum - (arr[i] + arr[j]))))
    }
}

console.log(answer)