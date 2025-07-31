const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const num = input.slice(1).map(line => line.split(' ').map(Number));

const grid = Array.from({length : n+1}, () => Array(n+1).fill(0));

grid[1][1] = num[0][0]

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n; j++){
        grid[i][j] = Math.max(grid[i][j-1], grid[i-1][j]) + num[i-1][j-1];
    }
}

console.log(grid[n][n])