const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

let maxPlus = 0, maxMinus = 0;
let plus = 0, minus = 0;

arr.forEach(val => {
    if (val > 0) {
        plus += 1;
        minus = 0;
    } else if (val < 0) {
        minus += 1;
        plus = 0;
    }

    maxPlus = Math.max(maxPlus, plus);
    maxMinus = Math.max(maxMinus, minus);
});

console.log(Math.max(maxPlus, maxMinus));