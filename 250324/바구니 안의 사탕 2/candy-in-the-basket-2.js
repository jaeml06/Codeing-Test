const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let index = 0;
const [n, k] = input[index++].split(" ").map(Number);

const arr = Array(101).fill(0);

for (let i = 0; i < n; i++) {
    const [candy, position] = input[index++].split(" ").map(Number);
    arr[position] += candy
}
let answer = 0
for(let i = 0; i < arr.length; i++){

    const temp = arr.slice(i - k >= 0 ? i - k : 0, i+ k + 1 <= arr.length + 1 ? i+ k + 1 : arr.length + 1);
    const sum = temp.reduce((prev, cur) => {
        return prev + cur;
    }, 0);
    answer = Math.max(sum, answer)
}

console.log(answer)

