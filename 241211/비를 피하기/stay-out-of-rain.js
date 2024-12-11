let fs = require('fs');
let [temp1, ...temp2] = fs.readFileSync(0).toString().trim().split('\n');
const [n, h, m] = temp1.split(' ').map(Number);

const graph = temp2.map((val) => val.trim().split(' ').map(Number));
const answer = Array.from({ length: n }, () => Array(n).fill(0));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(x, y) {
    const visited = Array.from({ length: n }, () => Array(n).fill(-1));
    const queue = [[x, y]];
    visited[y][x] = 0;
    let head = 0;

    while (head < queue.length) {
        const [curX, curY] = queue[head++];
        for (let i = 0; i < 4; i++) {
            const nexX = curX + dx[i];
            const nexY = curY + dy[i];

            if (
                0 <= nexX && nexX < n &&
                0 <= nexY && nexY < n &&
                graph[nexY][nexX] !== 1 &&
                visited[nexY][nexX] === -1
            ) {
                queue.push([nexX, nexY]);
                visited[nexY][nexX] = visited[curY][curX] + 1;

                if (graph[nexY][nexX] === 3) {
                    return visited[nexY][nexX];
                }
            }
        }
    }
    return -1;
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (graph[i][j] === 2) {
            answer[i][j] = bfs(j, i);
        }
    }
}

// 출력
console.log(answer.map(row => row.join(' ')).join('\n'));