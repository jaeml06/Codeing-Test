let fs = require('fs');
let read = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = read.splice(0, 1)[0].split(' ').map(Number)
const graph = read.splice(0, n).map(val => val.split(' ').map(Number));
const [r, c] = read.splice(0, 1)[0].split(' ').map(Number);

const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]
function searchTarget(x, y){
    let max = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i< n; i++){
        for(let j = 0; j < n; j++){
            if(graph[y][x] > graph[i][j]){
                max = Math.max(max, graph[i][j])
            }
        }
    }
    return max !== Number.MIN_SAFE_INTEGER ? max : null
}
function bfs(x, y, target, count){
    const visited = Array.from({length: n}, () => Array(n).fill(false));
    visited[y][x] = true
    const queue = [[x, y]];
    let head = 0;

    while(head < queue.length){
        const [curX, curY] = queue[head++]

        for(let i = 0; i < 4; i++){
            const nextX = curX + dx[i];
            const nextY = curY + dy[i];

            if(0<=nextX && nextX < n && 0 <= nextY && nextY < n && !visited[nextY][nextX] && graph[nextY][nextX] < graph[r - 1][c- 1]){
                if(graph[nextY][nextX] === target){
                    if(count === k){
                        return [nextX, nextY];
                    }
                    target = searchTarget(nextX, nextY)
                    if (target === null) {
                        return [nextX, nextY];
                    }
                    return bfs(nextX, nextY, target, count + 1)
                } else{
                    visited[nextY][nextX] = true
                    queue.push([nextX, nextY]);
                }
            }
        }
    }

}

const target = searchTarget(c- 1, r - 1)

const answer = bfs(c - 1, r - 1, target,1);
console.log(answer[1] + ' ' + answer[0])