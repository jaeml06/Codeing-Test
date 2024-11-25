let fs = require('fs');
let [temp1] = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(temp1);

const memo = Array(1001).fill(-1);

function dp(n) {
    if (n < 0) {
        return 0;
    }
    if (n === 0) {
        return 1;
    }
    if (memo[n] !== -1) {
        return memo[n];
    }
    memo[n] = dp(n - 2) + dp(n - 3);
    return memo[n];
}

console.log(dp(n) % 100007);