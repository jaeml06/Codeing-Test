const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

const temp = Array(200).fill(0)

segments.forEach(([start, end]) => {
    for(let i = start + 100; i <= end + 100; i++){
        temp[i] +=1
    }
})
console.log(Math.max(...temp))