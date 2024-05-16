let fs = require('fs');
const read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let T = Number(read1.shift())

let answer = ''
while(T > 0){
  const N = Number(read1.shift());
  const arr1 = read1.shift().split(' ').map(Number);
  const arr2 = read1.shift().split(' ').map(Number);

  const dp = [
    Array.from({length : N}, () => 0),
    Array.from({length : N}, () => 0),
    Array.from({length : N}, () => 0),
  ]
  dp[0][0] = arr1[0];
  dp[1][0]  = arr2[0];

  for(let i =1; i< N; i++){
    dp[0][i] = Math.max(dp[1][i-1], dp[2][i-1]) + arr1[i];
    dp[1][i] = Math.max(dp[0][i-1], dp[2][i-1]) + arr2[i];
    dp[2][i] = Math.max(dp[1][i-1], dp[0][i-1])
  }

  answer += Math.max(dp[0][N - 1], dp[1][N - 1], dp[2][N - 1]).toString() + '\n';
  T--
}
console.log(answer);
