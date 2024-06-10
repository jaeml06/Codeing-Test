let fs = require('fs');
let read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N] = read1[0].split(' ').map(Number);

const dp = [];

dp[3] = dp[2] = dp[1] = 1n

for(let i = 4; i <= N; i++){
  dp[i] = dp[i-1] + dp[i-3];
}
console.log(dp[N].toString());
