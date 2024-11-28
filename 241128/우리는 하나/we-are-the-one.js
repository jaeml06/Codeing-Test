let fs = require('fs');
let [temp1, ...temp2] = fs.readFileSync(0).toString().trim().split('\n');

const [n, k, u, d] = temp1.split(' ').map(Number);

const graph = temp2.map(val => val.split(' ').map(Number));
let visited


const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function combinations(arr, k) {
    const result = [];

    function helper(startX, startY, path) {
        if (path.length === k) {
            result.push([...path]);
            return;
        }

        for (let i = startY; i < arr.length; i++) {
            for(let j = startX; j < arr[i].length; j++){
                path.push([arr[i][j], j, i]);
                helper(j + 1, i + 1, path);
                path.pop();
            }
        }
    }

    helper(0, 0, []);
    return result;
}
function bfs(x, y){
    const queue = [[x, y]]
    visited[y][x] = true
    let head = 0
    
    while(head < queue.length){
        const [startX, startY] = queue[head++];
        for(let i = 0; i< 4; i++){
        const nextX = dx[i] + startX;
        const nextY = dy[i] + startY;

        if(0<= nextX && nextX < n && 0 <= nextY && nextY < n && !visited[nextY][nextX]){
            if(Math.abs(graph[startY][startX] - graph[nextY][nextX]) >= u && Math.abs(graph[startY][startX] - graph[nextY][nextX]) <= d){
                visited[nextY][nextX] = true;
                queue.push([nextX, nextY])
            }
        }
        }
    }
 
    return head
}

const arr = combinations(graph, k)
let maxSum = Number.MIN_SAFE_INTEGER;

arr.forEach(poses => {
    visited = Array.from({length: n}, () => Array(n).fill(false))
    let sum = 0
    poses.forEach(pos => {
        sum += bfs(pos[1], pos[2])
    })
    maxSum = Math.max(sum, maxSum);
})
console.log(maxSum)