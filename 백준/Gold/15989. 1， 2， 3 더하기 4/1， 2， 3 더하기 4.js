let fs = require('fs');
const read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
read1.shift();
const arr = read1.map(Number);

let dp = Array.from({ length: 10001 }, () =>
  Array.from({ length: 4 }, () => 0)
);

dp[1][1] = 1;
dp[2][1] = 1;
dp[2][2] = 1;
dp[3][1] = 1;
dp[3][2] = 1;
dp[3][3] = 1;

for (let i = 4; i <= 10000; i++) {
  dp[i][1] = dp[i - 1][1];
  dp[i][2] = dp[i - 2][1] + dp[i - 2][2];
  dp[i][3] = dp[i - 3][1] + dp[i - 3][2] + dp[i - 3][3];
}

arr.forEach((value) => {
  console.log(dp[value][1] + dp[value][2] + dp[value][3]);
})
