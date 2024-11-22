let fs = require('fs');
let read = fs.readFileSync(0).toString().trim().split('\n');
const [n, k, m] = read.splice(0, 1)[0].split(' ').map(Number)

const graph = read.splice(0, n).map(val => val.split(' ').map(Number));
const startDots = read.splice(0, k).map(val => val.split(' ').map(Number));
const visited = Array.from({length: n}, () => Array(n).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const rockPos = []
graph.forEach((row, y) => {
    row.forEach((col, x) => {
        if(col === 1){
            rockPos.push([x, y])
        }
    })
})

function bfs(x, y){
    visited[y][x] = true;
    const queue = [[x, y]]
    let head = 0

    while(head < queue.length){
        const [curX, curY] = queue[head++];
        for(let i = 0; i< 4; i++){
            const nextX = curX + dx[i];
            const nextY = curY + dy[i];

            if(0 <= nextX && nextX < n && 0 <= nextY && nextY < n && !visited[nextY][nextX] && graph[nextY][nextX] === 0){
                visited[nextY][nextX] = true
                queue.push([nextX, nextY])
            }
        }

    }
    return head

}
let maxCount = Number.MIN_SAFE_INTEGER
startDots.forEach(([c, r]) => {
    graph[r][c] = 0
    maxCount = Math.max(bfs(c, r), maxCount)
})

console.log(maxCount + 1)