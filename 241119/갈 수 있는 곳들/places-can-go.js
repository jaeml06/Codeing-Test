let fs = require('fs');
let read = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = read.splice(0, 1)[0].split(' ').map(Number);
const graph = read.splice(0, n).map(val => val.split(' ').map(Number));
const dot = read.splice(0, k).map(val => val.split(' ').map(Number));

const visited = Array.from({length : n}, () => Array(n).fill(false))

const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]

function bfs(x, y){
    const queue = [[x, y]];
    let head = 0
    visited[0][0] = true;

    while(head < queue.length){
        const [x, y] = queue[head]
        head++;
        for(let i = 0; i < 4; i++){
            const curX = x + dx[i];
            const curY = y + dy[i];

            if(0<= curX && curX < n && 0 <= curY && curY < n && !visited[curY][curX] && graph[curY][curX] === 0){
                visited[curY][curX] = true;
                queue.push([curX, curY]);
            }
        }
    }
    return head;
}
let answer = 0
for(const [x, y] of dot){
    const startX = x - 1;
    const startY = y - 1;

    if (
        0 <= startX && startX < n &&
        0 <= startY && startY < n &&
        !visited[startY][startX]
    ) {
        answer += bfs(startX, startY);
    }
}

console.log(answer)