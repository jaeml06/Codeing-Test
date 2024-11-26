let fs = require('fs');
let [temp1] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(temp1)

const memo = new Array(n + 1).fill(-1);

function dp(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    if (memo[n] !== -1) {
        return memo[n];
    }
    memo[n] = (dp(n - 1) + dp(n - 2)) % 10_007;
    return memo[n];
}

console.log(dp(n));