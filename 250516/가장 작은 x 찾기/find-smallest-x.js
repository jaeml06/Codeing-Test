const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const conditions = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

let answer = 0
for(let i = 1; i <= 10_000; i++){
    let temp = i
    const flag = conditions.every(val => {
        temp = temp * 2;
        const [a, b] = val;
        if(a <= temp && temp <= b){
            return true
        }
        return false;
    })
    if(flag){
        answer = i;
        break;
    }
}
console.log(answer)


