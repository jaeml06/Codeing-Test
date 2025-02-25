const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n').map(val => val.trim( ));
const [A, B, C] = input[0].split(' ').map(Number)

let startDay = 11
let startHour = 11
let startMin = 11
let answer = 0

if(startDay > A){
    console.log(-1)
    return
}
if(startDay === A && startHour > B){
        console.log(-1)
    return
}

if(startDay === A && startHour === B && startMin > C){
        console.log(-1)
    return
}

while(true){
    if(startDay === A && startHour === B && startMin === C){
        break;
    }

    answer += 1;
    startMin += 1;

    if(startMin === 60){
        startHour += 1
        startMin = 0
    }
    if(startHour === 24){
        startDay += 1
        startHour = 0
    }
}

console.log(answer)