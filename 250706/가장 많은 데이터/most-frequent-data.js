const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, n + 1);

const map = new Map();
arr.forEach(val => {
    map.set(val, (map.get(val) ?? 0) + 1)
})

console.log(Math.max(...map.values()))