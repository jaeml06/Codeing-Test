const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
  segments.push(input[i].split(' ').map(Number));
}
const arr = Array(101).fill(0)

segments.forEach(([x, y]) => {
  for(let i = x; i <= y; i++){
    arr[i] += 1
  }
})

console.log(Math.max(...arr))