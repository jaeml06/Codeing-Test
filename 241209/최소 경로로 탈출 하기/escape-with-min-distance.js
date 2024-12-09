let fs = require('fs');
let [temp1, ...temp2] = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = temp1.split(' ').map(Number);
const graph = temp2.map((val) => val.trim().split(' ').map(Number));
const visited = Array.from({ length: n }, () => Array(m).fill(-1));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

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
                0 <= nexX && nexX < m &&
                0 <= nexY && nexY < n &&
                visited[nexY][nexX] === -1 &&
                graph[nexY][nexX] === 1
            ) {
                queue.push([nexX, nexY]);
                visited[nexY][nexX] = visited[curY][curX] + 1;
            }
        }
    }


}

bfs();
console.log(visited[n - 1][m - 1]);