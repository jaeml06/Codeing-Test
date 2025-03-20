const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let answer = 0
for(let i = 0; i < n - k; i++){
    const temp = arr.slice(i, i + k)
    let sum = temp.reduce((prev, cur) => {
        return prev + cur
    }, 0)
    answer = Math.max(answer, sum)
}

console.log(answer)