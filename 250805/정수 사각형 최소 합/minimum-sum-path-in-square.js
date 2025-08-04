const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const num = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

const dp = Array.from({length : n}, () => Array(n).fill(0))

dp[0][n-1] = num[0][n-1];

for(let i = 1; i < n; i++){
    dp[i][n-1] = dp[i - 1][n-1] + num[i][n-1];
}

for(let j = n - 2; j>=0; j--){
    dp[0][j] = dp[0][j+1] + num[0][j];
}

for(let i = 1; i < n; i++){
    for(let j = n - 2; j >= 0; j--){
        dp[i][j] = Math.min(dp[i-1][j], dp[i][j+1]) + num[i][j];
    }
}

console.log(dp[n-1][0])