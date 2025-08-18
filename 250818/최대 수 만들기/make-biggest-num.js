const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0], 10);
const numbers = input.slice(1, n + 1).map(line => parseInt(line, 10));

numbers.sort((a, b) => {
    const temp1 = Number(String(a) + String(b));
    const temp2 = Number(String(b) + String(a));
    if (temp1 > temp2) return -1;
    if (temp2 > temp1) return 1;
    return 0;
  });

const result = numbers.join('');

console.log(result[0] === '0' ? '0' : result);