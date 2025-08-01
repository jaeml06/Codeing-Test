const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const num = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

const temp = Array.from({length : n+1}, () => Array(n+1).fill(0))

for(let i = 1; i <= n; i++){
    for(let j = n-1; j >= 0; j--){
        if(i === 1 || j === n-1){
            temp[i][j] = Math.max(temp[i-1][j], temp[i][j + 1]) + num[i-1][j];
            continue;
        }
        temp[i][j] = Math.min(temp[i-1][j], temp[i][j + 1]) + num[i-1][j];
    }
}

console.log(temp[n][0])