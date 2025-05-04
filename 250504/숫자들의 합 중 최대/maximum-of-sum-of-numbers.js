const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);

let max = 0
for(let i = x; i <= y; i++){
    const sum = [...i.toString()].map(Number).reduce((prev, cur) => prev + cur, 0)
    max= Math.max(sum, max)
}
console.log(max)