const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
const startPoints = input.slice(n + 1).map(line => line.split(' ').map(Number));
const visited = Array.from({length : n}, () => Array(n).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(x, y){
    const queue = [[x, y]];
    visited[y][x] = true;
    let count = 1;
    while(queue.length > 0){
        const [cx, cy] = queue.shift();
        for(let i = 0; i < 4; i++){
            const nx = cx + dx[i];
            const ny = cy + dy[i];

            if(0<=nx && nx < n && 0<=ny && ny < n && !visited[ny][nx] && grid[ny][nx] === 0){
                visited[ny][nx] = true;
                count++;
                queue.push([nx, ny]);
            }
        }

    }
    return count;
}

let sum = 0;
startPoints.forEach(([y, x]) => {
    if(!visited[y-1][x-1]){
        sum += bfs(x-1, y-1);
    }
})

console.log(sum)