const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(" ").map(Number);
let count = 0;

for (let i = x; i <= y; i++) {
  const digits = [...i.toString()];
  const map = new Map();

  for (const digit of digits) {
    map.set(digit, (map.get(digit) || 0) + 1);
  }

  if (map.size === 2) {
    const freqs = [...map.values()];
    if ((freqs.includes(1) && freqs.includes(digits.length - 1))) {
      count++;
    }
  }
}

console.log(count);
