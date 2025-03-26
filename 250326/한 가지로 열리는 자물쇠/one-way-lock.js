const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const [a, b, c] = input[1].trim().split(' ').map(Number);

let count = 0

for(let i = 1; i <= 6; i++){
    for(let j = 1; j <= 6; j++){
        for(let k = 1; k <= 6; k++){
            if(Math.abs(a - i) <= 2 || Math.abs(b - j) <= 2 || Math.abs(c - k) <= 2){
                count++
            }
        }
    }
}

console.log(count)