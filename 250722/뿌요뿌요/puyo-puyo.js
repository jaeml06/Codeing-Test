const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(row => row.split(" ").map(Number));

const visited = Array.from({length: n}, () => Array(n).fill(false));
const dx = [-1, 1, 0 , 0];
const dy = [0, 0, -1, 1];

function dfs(x, y, target){
    let count = 1
    for(let i = 0; i < 4; i++){
        const nx = x + dx[i];
        const ny = y + dy[i];

        if(0<=nx && nx < n && 0<= ny && ny < n && !visited[ny][nx] && target === grid[ny][nx]){
            visited[ny][nx] = true;
            count += dfs(nx, ny, target);
        }
    }

    return count
}
let max = Number.MIN_SAFE_INTEGER
let totalCount = 0
for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(!visited[i][j]){
            visited[i][j] = true;
            const count = dfs(j, i, grid[i][j]);
            if(count >= 4){
                totalCount++
            }
            max = Math.max(count, max);
        }
    }
}

console.log(`${totalCount} ${max}`)