let fs = require('fs');
let [temp1, temp2] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(temp1);
const [r1, c1, r2, c2] = temp2.split(' ').map(Number);
const visited = Array.from({length : n}, () => Array(n).fill(-1))

const dx = [-2, -1, 1, 2, -2, -1, 1, 2];
const dy = [1, 2, 2, 1, -1, -2, -2, -1];

function bfs(r1, c1){
    const queue = [[c1, r1]];
    let head = 0
    visited[r1][c1] = 0

    while(head < queue.length){
        const [curX, curY] = queue[head++]
        for(let i = 0; i < 8; i++){
            const nextX = curX + dx[i];
            const nextY = curY + dy[i];

            if(0 <= nextX && nextX < n && 0 <= nextY && nextY < n && visited[nextY][nextX] === -1){
                if(nextY === r2 - 1 && nextX === c2 - 1){
                    return visited[curY][curX] + 1
                }
                visited[nextY][nextX] = visited[curY][curX] + 1
                queue.push([nextX, nextY]);
            }
        }
       
    }
     return -1;
}
console.log(bfs(r1 - 1, c1 - 1))