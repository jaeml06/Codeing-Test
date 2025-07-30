const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].trim().split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

const prefixSum = Array(n).fill(0);
let count = 0;

prefixSum[0] = 0;

for(let i = 1; i < n; i++){
    prefixSum[i] = prefixSum[i - 1] + arr[i];
}

for(let i = 0; i <= n; i++){
    for(let j = i; j <= n; j++){
        if(k === prefixSum[j] - prefixSum[i] + arr[i]){
            count++
        }
    }
}

console.log(count)