let fs = require('fs');
let [temp1] = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(temp1);

const memo = Array(N + 1).fill(-1)
function fibo(n){
    if(memo[n] !== -1){
        return memo[n]
    }else if(n < 3){
        memo[n] = 1;
    }else{
        memo[n] = fibo(n-1) + fibo(n-2);
    }
    return memo[n]
}
fibo(N)

console.log(memo[N])