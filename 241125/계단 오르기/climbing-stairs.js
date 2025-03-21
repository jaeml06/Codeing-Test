let fs = require('fs');
let [temp1] = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(temp1);

const memo = Array(1001).fill(0);

function dp(n) {
    if (n <= 1) {
        return 0; 
    }
    if (memo[n] !== 0) {
        return memo[n];
    }
    if (n === 2 || n === 3) {
        memo[n] = 1;
    } else {
        memo[n] = (dp(n - 2) + dp(n - 3)) % 10007; 
    }
    return memo[n];
}

console.log(dp(n));