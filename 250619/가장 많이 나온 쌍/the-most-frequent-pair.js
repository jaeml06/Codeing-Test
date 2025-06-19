const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const pairs = input.slice(1, 1 + m).map(line => line.split(' ').map(Number).sort());

const map = new Map();
pairs.forEach(([a, b], index) => {
    map.set(`${a}${b}`, (map.get(`${a}${b}`)?? 0) + 1)
})

console.log(Math.max(...map.values()))