const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

let max = 1
let answer = 1

arr.forEach((val, index) => {
    if(index === 0){
        
    } else if(arr[index - 1] < arr[index]){
        max++
    } else {
        answer = Math.max(max, answer)
        max=1
    }
})
answer = Math.max(max, answer)
console.log(answer)