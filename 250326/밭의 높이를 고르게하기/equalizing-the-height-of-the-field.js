const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, h, t] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let minValue = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < n - t + 1; i++) {
  let temp = 0;
  for (let j = 0; j < t; j++) {
    temp += Math.abs(h - arr[i + j]);
  }
  if (temp < minValue) {
    minValue = temp;
  }
}

console.log(minValue);