let fs = require('fs');
let [temp1, ...temp2] = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = temp1.split(' ').map(Number);
const graph = temp2.map(val => val.split(' ').map(Number));
const visited = Array.from({ length: n }, () => Array(m).fill(false));
const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]

function bfs(){
    const queue = [[0, 0]];
    let head = 0
    visited[0][0] = true;

    while(head < queue.length){
        const [x, y] = queue[head]
        head++;
        for(let i = 0; i < 4; i++){
            const curX = x + dx[i];
            const curY = y + dy[i];

            if(0<= curX && curX < n && 0 <= curY && curY < m && !visited[curY][curX] && graph[curY][curX] === 1){
                if(curX === m - 1 && curY === n - 1){
                    return true;
                }
                visited[curY][curX] = true;
                queue.push([curX, curY]);
            }
        }
    }
    return false;
}
console.log(bfs() ? 1 : 0)

