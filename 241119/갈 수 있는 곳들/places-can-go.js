let fs = require('fs');
let read = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = read.splice(0, 1)[0].split(' ').map(Number);
const graph = read.splice(0, n).map(line => line.split(' ').map(Number));
const dots = read.splice(0, k).map(line => line.split(' ').map(Number));

const visited = Array.from({ length: n }, () => Array(n).fill(false));


const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(x, y) {
    const queue = [[x, y]];
    let head = 0;
    let count = 0;
    visited[y][x] = true;

    while (head < queue.length) {
        const [curX, curY] = queue[head++];
        count++;
        for (let i = 0; i < 4; i++) {
            const nextX = curX + dx[i];
            const nextY = curY + dy[i];

            if (
                nextX >= 0 && nextX < n &&
                nextY >= 0 && nextY < n &&
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


let totalReachable = 0;
dots.forEach(([r, c]) => {
    const startX = c - 1;
    const startY = r - 1;
    if (!visited[startY][startX]) {
        totalReachable += bfs(startX, startY);
    }
});

console.log(totalReachable);