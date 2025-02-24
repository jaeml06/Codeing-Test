const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n').map(val => val.trim( ));

const [A, B, C, D] = input[0].split(' ').map(Number);
let checkHour = A
let checkMinutes = B
let answer = 0

while(true){
    if(C === checkHour && checkMinutes === D){
        break
    }
    answer += 1;
    checkMinutes += 1
    if(checkMinutes === 60){
        checkHour += 1
        checkMinutes = 0
    }
}

console.log(answer)