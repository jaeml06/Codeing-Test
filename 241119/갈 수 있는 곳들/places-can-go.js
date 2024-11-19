let fs = require('fs');
let read = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = read.splice(0, 1)[0].split(' ').map(Number);
const graph = read.splice(0, n).map(val => val.split(' ').map(Number));
const dot = read.splice(0, k).map(val => val.split(' ').map(Number));

const visited = Array.from({ length: n }, () => Array(n).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(x, y) {
    const queue = [[x, y]];
    let count = 0
    let head = 0;
    visited[y][x] = true; 

    while (head < queue.length) {
        const [curX, curY] = queue[head++];
        count++
        for (let i = 0; i < 4; i++) {
            const nextX = curX + dx[i];
            const nextY = curY + dy[i];

            if (
                0 <= nextX && nextX < n &&
                0 <= nextY && nextY < n &&
                !visited[nextY][nextX] &&
                graph[nextY][nextX] === 0
            ) {
                visited[nextY][nextX] = true;
                queue.push([nextX, nextY]);
            }
        }
    }
    return count; 
}

let answer = 0;
for (const [x, y] of dot) {
    const startX = x - 1;
    const startY = y - 1;

    if (!visited[startY][startX]) {
        answer += bfs(startX, startY);
    }
}

console.log(answer);