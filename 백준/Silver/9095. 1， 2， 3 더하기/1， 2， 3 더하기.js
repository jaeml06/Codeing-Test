let fs = require('fs');
let [read, ...rest] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(read);

const num = rest.map(value => Number(value));

num.forEach((value) => {
    const dp =Array.from({length:value + 1}, () => 0);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    for(let i = 4; i<value + 1; i++){
        dp[i] = dp[i-3] + dp[i-2] + dp[i-1];
    }
    console.log(dp[value]);
})
