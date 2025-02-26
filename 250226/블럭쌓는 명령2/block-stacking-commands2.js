const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

const area = Array(n + 1).fill(0)

segments.forEach(([start, end]) => {
    for(let i = start; i <= end; i++){
        area[i] += 1
    }
})
console.log(Math.max(...area))