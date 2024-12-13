let fs = require('fs');
let [temp1, ...temp2] = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = temp1.split(' ').map(Number);
const graph = temp2.map(val => val.split(' ').map(Number));

const visited = Array.from({length : n}, () => Array(n).fill(-1));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const pos = []


graph.forEach((row, y) => {
    row.forEach((val, x) => {
        if (val === 2) {
            visited[y][x] = 0;
            pos.push([x, y]);
        }
    });
});

function bfs(poses){
    const queue = [...poses];
    let head = 0;
    
    while(head < queue.length){
        const [curX, curY] = queue[head++];
        for(let i = 0; i < 4; i++){
            const nextX = curX + dx[i];
            const nextY = curY + dy[i];
            if(0 <= nextX && nextX < n && 0<= nextY && nextY < n && visited[nextY][nextX] === -1 && graph[nextY][nextX] === 1){
                queue.push([nextX, nextY]);
                visited[nextY][nextX] = visited[curY][curX] + 1;

            }
        }
    }
}


bfs(pos)


for (let i = 0; i < n; i++) {
    const resultRow = [];
    for (let j = 0; j < n; j++) {
        if (graph[i][j] === 0) {
            resultRow.push(-1);
        } else if (graph[i][j] === 2) {
            resultRow.push(0);
        } else if (graph[i][j] === 1) {
            if (visited[i][j] === -1) {
                resultRow.push(-2);
            } else {
                resultRow.push(visited[i][j]);
            }
        }
    }
    console.log(resultRow.join(' '));
}