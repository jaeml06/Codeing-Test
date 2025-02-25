const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n').map(val => val.trim( ));

let [m1, d1, m2, d2] = input[0].split(' ').map(Number)
const target = input[1]

const dayofstring = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const numofMonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

let index = 0
let answer = 0

while(true){
    if(m1 === m2 && d1 === d2){
        break
    }

    d1 += 1
    index += 1
    if(target === dayofstring[index % 7]){
        answer += 1
    }

    if(numofMonth[m1] === d1){
        m1 += 1
        d1 = 0
    }
    
}
console.log(answer)