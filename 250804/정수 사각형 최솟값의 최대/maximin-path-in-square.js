const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const matrix = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

const dp = Array.from({length : n}, () => Array(n).fill(0));

dp[0][0] = matrix[0][0];

for (let i = 1; i < n; i++) {
    dp[i][0] = Math.min(dp[i - 1][0], matrix[i][0]);
    }

for (let j = 1; j < n; j++) {
    dp[0][j] = Math.min(dp[0][j - 1], matrix[0][j]);
}

for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
        dp[i][j] = Math.min(Math.max(dp[i - 1][j], dp[i][j - 1]), matrix[i][j]);
    }
}

console.log(dp[n - 1][n - 1]);