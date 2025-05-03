const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);
const matches = input.slice(1).map(line => line.split(' ').map(Number));

let answer = 0;

for (let a = 1; a <= n; a++) {
  for (let b = 1; b <= n; b++) {
    if (a === b) continue;

    let isValid = true;

    for (let i = 0; i < k; i++) {
      const match = matches[i];
      const posA = match.indexOf(a);
      const posB = match.indexOf(b);
      if (posA >= posB) {
        isValid = false;
        break;
      }
    }

    if (isValid) answer++;
  }
}

console.log(answer);