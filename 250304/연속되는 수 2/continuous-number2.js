const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);
let answer = 1;
let cnt = 1;

for(let i = 1; i < n; i++){
     if(arr[i - 1] !== arr[i]){
        if(cnt >= 1){
            answer = Math.max(answer, cnt)
        }
        cnt = 1
    } else {
        cnt += 1
    }
}

console.log(answer)