const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, h, t] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let minValue = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < N - T + 1; i++) {
  let temp = 0;
  // j를 0부터 T-1까지 순회
  for (let j = 0; j < T; j++) {
    temp += Math.abs(H - arr[i + j]);
  }
  if (temp < minValue) {
    minValue = temp;
  }
}

console.log(minValue);