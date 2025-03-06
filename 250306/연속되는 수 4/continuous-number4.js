const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

let max = 0
let answer = 0

arr.forEach((val, index) => {
    if(index === 0){
        max++
    } else if(arr[index - 1] < arr[index]){
        max++
    } else {
        answer = Math.max(max, answer)
        max=1
    }
})

console.log(answer)