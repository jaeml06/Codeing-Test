const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(" ").map(Number));

const base = 100;
const grid = Array.from({ length: 201 }, () => Array(201).fill(false));

rects.forEach(([x1, y1, x2, y2]) => {
  x1 += base;
  y1 += base;
  x2 += base;
  y2 += base;

  for (let x = x1; x < x2; x++) {
    for (let y = y1; y < y2; y++) {
      grid[x][y] = true;
    }
  }
});

let totalArea = 0;
for (let x = 0; x <= 200; x++) {
  for (let y = 0; y <= 200; y++) {
    if (grid[x][y]) totalArea++;
  }
}

console.log(totalArea);