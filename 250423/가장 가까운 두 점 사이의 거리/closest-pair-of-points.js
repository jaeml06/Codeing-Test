const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

let min = Number.MAX_SAFE_INTEGER

for(let i = 0; i < n - 1; i++){
    for(let j = i + 1; j < n; j++){
        min = Math.min(Math.pow(Math.abs(points[i][0] - points[j][0]), 2) + Math.pow(Math.abs(points[i][1] - points[j][1]), 2), min)
    }
}
console.log(min)