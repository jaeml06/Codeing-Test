const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b, c] = input[0].split(' ').map(Number);
let max = 0
let i = 0
let j = 0
while( a * i <= c){
    while(a * i + b * j <= c){
        j++
    }
    j--
    max = Math.max(max, a * i + b * j)
    i++
}
console.log(max)