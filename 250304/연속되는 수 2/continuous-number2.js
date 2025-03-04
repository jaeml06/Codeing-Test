const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);
let answer = 1;
let cnt = 0;

for(let i = 0; i < n; i++){
    if(i === 0){
        cnt += 1;
    } else if(arr[i - 1] !== arr[i]){
        if(cnt >= 1){
            answer = Math.max(answer, cnt)
        }
        cnt = 1
    } else {
        cnt += 1
    }
}
answer = Math.max(answer, cnt)
console.log(answer)