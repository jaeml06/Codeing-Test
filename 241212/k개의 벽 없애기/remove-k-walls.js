let fs = require('fs');
let [temp1, ...temp2] = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = temp1.split(' ').map(Number);
const graph = temp2.splice(0, n).map(val => val.split(' ').map(Number))
const [r1, c1] = temp2[0].split(' ').map(Number);
const [r2, c2] = temp2[1].split(' ').map(Number);
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];



const wallPos = []
graph.forEach((row, y) => {
    row.forEach((col, x) => {
        if(col === 1){
            wallPos.push([x, y])
        }
    })
})

function combinations(arr, k){
    const result = [];
    
    function helper(start, path) {
        if(path.length === k){
            result.push([...path])
            return;
        }

        for(let i = start; i < arr.length; i++){
            path.push(arr[i]);
            helper(i+1, path);
            path.pop()
        }
    }
    helper(0, []);
    return result
}
const wallPosCombin = combinations(wallPos, k)

function bfs(x, y){
    const visited = Array.from({length : n}, () => Array(n).fill(-1))
    const queue = [[x,y]];
    let head = 0
    visited[y][x] = 0;

    while(head < queue.length) {
        const [curX, curY] = queue[head++];
        
        for(let i = 0; i < 4; i++){
            const nextX = curX + dx[i];
            const nextY = curY + dy[i];

            if(0 <= nextX && nextX < n && 0 <= nextY && nextY < n && visited[nextY][nextX] === -1 && graph[nextY][nextX] === 0){
                queue.push([nextX, nextY]);
                visited[nextY][nextX] = visited[curY][curX] + 1;

                if(r2 - 1 === nextY && c2 - 1 === nextX){
                    return visited[nextY][nextX]
                }
            } 
        }
    }
    return Number.MAX_SAFE_INTEGER
}

let maxCount = Number.MAX_SAFE_INTEGER;
wallPosCombin.forEach((walls) => {

    walls.forEach(([x, y]) => {
        graph[y][x] = 0
    })

    maxCount = Math.min(bfs(c1 -1, r1 -1), maxCount);

    walls.forEach(([x, y]) => {
        graph[y][x] = 1
    })
})

console.log(maxCount === Number.MAX_SAFE_INTEGER ? -1 : maxCount)
