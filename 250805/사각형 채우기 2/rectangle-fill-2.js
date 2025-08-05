const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

const dp = Array(n + 1).fill(0);
const MOD = 10_007;

dp[0] = 1;
dp[1] = 1;

for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] * 2) % MOD;
}

console.log(dp[n]);