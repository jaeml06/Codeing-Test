const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const queries = input[2].split(' ').map(Number);

const map = new Map();

arr.forEach(val => {
    map.set(val, (map.get(val) ?? 0) + 1)
})
const answer = [];
queries.forEach(val => {
    answer.push(map.get(val)?? 0)
})

console.log(answer.join(' '))