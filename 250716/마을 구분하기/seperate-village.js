const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
const visited = Array.from({length: n}, () => Array(n).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const people = [];
let count = 0

function dfs(x, y){
    for(let i = 0; i<4; i++){
        const nx = x + dx[i];
        const ny = y + dy[i];

        if(0 <= nx && nx < n && 0<= ny && ny < n && !visited[ny][nx] && grid[ny][nx] === 1){
            visited[ny][nx] = true;
            count++;
            dfs(nx, ny);
        }
    }
}

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(!visited[i][j] && grid[i][j] === 1){
            visited[i][j] = true;
            count=1
            dfs(j, i);

            people.push(count);
        }
    }
}

people.sort((a, b) => a - b);
console.log(people.length);
people.forEach(val => console.log(val))