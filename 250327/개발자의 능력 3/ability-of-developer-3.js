const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].trim().split(' ').map(Number);
const sum = arr.reduce((prev, cur) => {
    return prev + cur
}, 0)

let answer = Number.MAX_SAFE_INTEGER
for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
        for(let k = j + 1; k < arr.length; k++){
            let temp = arr[i] + arr[j] + arr[k];
            answer = Math.min(answer, Math.abs((sum - temp) - temp))
        }
    }
}
console.log(answer)