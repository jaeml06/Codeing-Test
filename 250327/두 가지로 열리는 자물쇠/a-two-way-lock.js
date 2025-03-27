const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const [a, b, c] = input[1].split(" ").map(Number);
const [a2, b2, c2] = input[2].split(" ").map(Number);


function isClose(x, y, n) {
  let diff = Math.abs(x - y);
  let circularDiff = Math.min(diff, n - diff);
  return circularDiff <= 2;
}

let count = 0;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    for (let k = 1; k <= n; k++) {
      const closeToFirst =
        isClose(i, a, n) && isClose(j, b, n) && isClose(k, c, n);
      const closeToSecond =
        isClose(i, a2, n) && isClose(j, b2, n) && isClose(k, c2, n);

      if (closeToFirst || closeToSecond) {
        count++;
      }
    }
  }
}

console.log(count);