const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n').map(val => val.trim( ));

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
let checkMonth = m1
let checkDays = d1
let answer = 1

const temp = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

while(true){
    if(m2 === checkMonth && checkDays === d2){
        break
    }
    answer += 1;
    checkDays += 1

    if(temp[checkMonth] === checkDays){
        checkMonth += 1
        checkDays = 1
    }
}

console.log(answer+1)