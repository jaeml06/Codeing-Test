const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr1 = input[1].trim().split(' ').map(Number);
const m = Number(input[2]);
const arr2 = input[3].trim().split(' ').map(Number);

const zip1 = new Set(arr1);
const answer = []

for(const val of arr2 ){
    if(zip1.has(val)){
        answer.push(1)
    }else{
        answer.push(0)
    }
}

console.log(answer.join(' '))

