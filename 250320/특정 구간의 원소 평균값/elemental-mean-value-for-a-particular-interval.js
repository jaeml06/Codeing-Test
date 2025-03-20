const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.
let count = 0

for(let i = 0; i < n; i++){
    for(let j = i; j < n; j++){
        const temp = arr.slice(i, i=== j ? i + 1 : j + 2)
        const avg = temp.reduce((prev, cur) => prev + cur, 0) / temp.length
        if (avg % 1 === 0 && temp.includes(avg)) {
            count++;
        }
    }
}
console.log(count)