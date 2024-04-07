let fs = require('fs');
let [read, ...rest] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const stairs =[0, ...rest.map(value => Number(value))]; 

const dp = Array.from({length: stairs.length + 1}, () => 0);

if(stairs.length > 1){
    dp[1] = stairs[1];
}
if(stairs.length > 2){
    dp[2] = stairs[1] + stairs[2];
}


for(let i = 3; i< stairs.length + 1; i++){
    dp[i] = Math.max(dp[i - 2] + stairs[i], dp[i-3] + stairs[i-1] + stairs[i]);
}

console.log(dp[stairs.length-1]);
