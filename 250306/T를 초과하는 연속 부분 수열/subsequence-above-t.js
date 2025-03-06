const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let max = 0
let answer = 0
arr.forEach((val, index) => {
    if(index === 0){

    } else if(val > t){
        if(max === 0){
            max++
        } else if(arr[index -1] < arr[index]){
            max++;
        }
    } else{
        answer = Math.max(max, answer)
        max = 0
    }
})

answer = Math.max(max, answer)
console.log(answer)