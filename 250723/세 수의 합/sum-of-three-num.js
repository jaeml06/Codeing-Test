const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let count = 0;

for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let l = j + 1; l < n; l++) {
      if (arr[i] + arr[j] + arr[l] === k) {
        count++;
      }
    }
  }
}

console.log(count);