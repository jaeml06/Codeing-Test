const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(row => row.split(' ').map(Number));
const visited = Array.from({length : n}, () => Array(m).fill(false))
const dx = [1, 0];
const dy = [0, 1];

function dfs(x, y){
    for(let i = 0; i < 2; i++){
        const nx = x + dx[i];
        const ny = y + dy[i];

        if(0 <= ny && ny < n && 0 <= nx && nx < m  && !visited[ny][nx] && grid[ny][nx] === 1){
            visited[ny][nx] = true
            dfs(nx, ny)
        }
    }
}

dfs(0, 0);

console.log(visited[n-1][m-1] ? 1 : 0)