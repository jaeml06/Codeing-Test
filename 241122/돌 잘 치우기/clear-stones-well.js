let fs = require('fs');
let read = fs.readFileSync(0).toString().trim().split('\n');
const [n, k, m] = read.splice(0, 1)[0].split(' ').map(Number)

const graph = read.splice(0, n).map(val => val.split(' ').map(Number));
const startDots = read.splice(0, k).map(val => val.split(' ').map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const rockPos = []
graph.forEach((row, y) => {
    row.forEach((col, x) => {
        if(col === 1){
            rockPos.push([x, y])
        }
    })
})

function combinations(arr, k) {
    const result = [];

    function helper(start, path) {
        if (path.length === k) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < arr.length; i++) {
            path.push(arr[i]);
            helper(i + 1, path);
            path.pop();
        }
    }

    helper(0, []);
    return result;
}
const rockPosCombin = combinations(rockPos, m)


function bfs(x, y){
    const visited = Array.from({length: n}, () => Array(n).fill(false));
    visited[y][x] = true;
    const queue = [[x, y]];
    let head = 0;

    while(head < queue.length){
        const [curX, curY] = queue[head++];
        for(let i = 0; i< 4; i++){
            const nextX = curX + dx[i];
            const nextY = curY + dy[i];

            if(0 <= nextX && nextX < n && 0 <= nextY && nextY < n && !visited[nextY][nextX] && graph[nextY][nextX] === 0){
                visited[nextY][nextX] = true;
                queue.push([nextX, nextY]);
            }
        }

    }
    return queue.length;
}

let maxCount = Number.MIN_SAFE_INTEGER;
startDots.forEach(([r, c]) => {
    rockPosCombin.forEach((rocks) => {
        rocks.forEach(([x, y]) => {
            graph[y][x] = 0
        })
         maxCount = Math.max(bfs(c -1, r -1), maxCount);
         rocks.forEach(([x, y]) => {
            graph[y][x] = 1
        })
    })
})

console.log(maxCount)