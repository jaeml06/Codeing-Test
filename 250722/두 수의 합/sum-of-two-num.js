const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let count = 0;
const map = new Map();

for (let i = 0; i < n; i++) {
  const needed = k - arr[i];

  if (map.has(needed)) {
    count += map.get(needed);
  }
  map.set(arr[i], (map.get(arr[i]) ?? 0) + 1);
}

console.log(count);