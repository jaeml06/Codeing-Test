const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].trim().split(" ").map(Number);

let count = 0;

for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
        const temp = arr.slice(i, j + 1);
        const sum = temp.reduce((prev, cur) => prev + cur, 0);
        const avg = sum / temp.length;

        if (avg % 1 === 0 && temp.includes(avg)) { // ✅ 평균이 정수인지 확인 후 탐색
            count++;
        }
    }
}

console.log(count);