const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const mod = 1_000_000_007;
const temp = Array(n + 1).fill(0);

temp[0] = 1
temp[1] = 2;
temp[2] = 7;

for(let i = 3; i < n+1; i++){
    temp[i] = ((3*temp[i-2]) + (2 * temp[i-1])) % mod;
    for(let j = i - 3; j >= 0; j--){
        temp[i] = (temp[i] + temp[j] * 2) % mod;
    }
}
console.log(temp[n])