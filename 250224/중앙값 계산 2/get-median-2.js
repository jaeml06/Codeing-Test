const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n').map(val => val.trim( ));

const N = Number(input[0])
const arr = input[1].split(' ').map(Number)
const answer = []

arr.forEach((value, index) => {
    if(index % 2 === 0){
        const temp = arr.slice(0, index+1)
        temp.sort((a, b) => a - b)
        answer.push(temp[Math.floor(temp.length / 2)])
    }
})

console.log(answer.join(' '))