const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
// Please Write your code here.

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
let x = 0, y = 0
let dirNum = 0;

const grid = Array.from({length : n}, () => Array(m).fill(0));

grid[y][x] = 1

for(let i = 2; i<n * m; i++){
    let nx = x + dx[dirNum]; 
    let ny = y + dy[dirNum];

    if(!(0 <= nx && nx < m && 0 <= ny && ny < n) || grid[ny][nx] !== 0){
        dirNum = (dirNum + 1) % 4
    }
    x += dx[dirNum];
    y += dy[dirNum];
    grid[y][x] = i
}

for (let i = 0; i < n; i++) {
    let print = "";
    for (let j = 0; j <  m; j++) {
        print += `${grid[i][j]} `;
    }
    console.log(print);
}