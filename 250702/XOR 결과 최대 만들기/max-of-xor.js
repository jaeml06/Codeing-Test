const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);

let max = 0
function dfs(start, count, xor){
    if(count === m){
        max = Math.max(max, xor)
        return;
    }
    for(let i = start; i < n; i++){
        dfs(i + 1, count + 1, xor ^ a[i]);
    }
}
dfs(0, 0, 0)
console.log(max)