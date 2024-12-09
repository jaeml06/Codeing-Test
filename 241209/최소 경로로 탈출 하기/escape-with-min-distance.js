let fs = require('fs');
let [temp1, ...temp2] = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = temp1.split(' ').map(Number);
const graph = temp2.map((val) => val.trim().split(' ').map(Number));
const visited = Array.from({ length: m }, () => Array(n).fill(-1));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

if (graph[0][0] === 0) {
    console.log(-1);
    return;
}

function bfs() {
    const queue = [[0, 0]];
    visited[0][0] = 0;
    let head = 0;

    while (head < queue.length) {
        const [curX, curY] = queue[head++];
        for (let i = 0; i < 4; i++) {
            const nexX = curX + dx[i];
            const nexY = curY + dy[i];

            if (
                0 <= nexX && nexX < n &&
                0 <= nexY && nexY < m &&
                visited[nexY][nexX] === -1 &&
                graph[nexY][nexX] === 1
            ) {
                queue.push([nexX, nexY]);
                visited[nexY][nexX] = visited[curY][curX] + 1;
            }
        }
    }

    if (visited[m - 1][n - 1] === -1) {
        console.log(-1);
    } else {
        console.log(visited[m - 1][n - 1]);
    }
}

bfs();