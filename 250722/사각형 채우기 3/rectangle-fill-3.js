const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const temp = Array(n + 1).fill(0);

temp[1] = 2;
temp[2] = 7;

for(let i = 3; i <n+1; i++){
    temp[i] = ((temp[i-2] * temp[i-1] * 2) - 6) % 1_000_000_007;
}
console.log(temp[n])