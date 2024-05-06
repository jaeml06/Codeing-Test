let fs = require('fs');
const read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
read1.shift();
const arr = read1[0].split(' ').map(Number);

let dp = Array.from({ length: arr.length+1 }, () => 0);

for(let i = 0; i < arr.length; i++){
  let max = 0;
  for(let j=0; j < i; j++){
    if(arr[i] < arr[j] && dp[j] > max){
      max = dp[j]
    }
  }
  dp[i] = max + 1;
}
console.log(Math.max(...dp))