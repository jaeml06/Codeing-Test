const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

let max = Number.MIN_SAFE_INTEGER
for(let i = 0; i< segments.length; i++){
    const visited = Array(1001).fill(false)
    const temp = [...segments.slice(0, i), ...segments.slice(i + 1, segments.length)];
    for(const [start, end] of temp){
        for(let j = start; j < end; j++){
            visited[j] = true
        }
    }
    max = Math.max(max, visited.reduce((prev, cur) => prev + (cur ? 1 : 0)));
}

console.log(max)