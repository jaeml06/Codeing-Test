const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
const visited = Array.from({length: n}, () => Array(m).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
function bfs(x, y){
    const queue = [[x, y]];
    visited[y][x] = true;

    while(queue.length > 0){
        const [cx, cy] = queue.shift();

        for(let i = 0; i <4; i++){
            const nx = cx + dx[i];
            const ny = cy + dy[i];

            if(0<= nx && nx < m && 0 <= ny && ny < n && !visited[ny][nx] && grid[ny][nx] === 1){
                visited[ny][nx] = true;
                queue.push([nx, ny]);
                if(nx === m-1 && ny === n-1){
                    return true;
                }
            }
        }
    } 
    return false
}
const flag = bfs(0, 0);

console.log(flag ? 1 : 0)