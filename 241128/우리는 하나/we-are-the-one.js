let fs = require('fs');
let [temp1, ...temp2] = fs.readFileSync(0).toString().trim().split('\n');

const [n, k, u, d] = temp1.trim().split(' ').map(Number);

const graph = temp2.map(val => val.trim().split(' ').map(Number));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function combinations(arr, k) {
    const result = [];
    const n = arr.length;
    const positions = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            positions.push({ value: arr[i][j], x: j, y: i });
        }
    }

    function helper(start, path) {
        if (path.length === k) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < positions.length; i++) {
            path.push(positions[i]);
            helper(i + 1, path);
            path.pop();
        }
    }

    helper(0, []);
    return result;
}

function bfs(x, y, visited){
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
    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    let sum = 0
    poses.forEach(pos => {
        if(!visited[pos.y][pos.x]){
            sum += bfs(pos.x, pos.y, visited);
        }
    })
    maxSum = Math.max(sum, maxSum);
})
console.log(maxSum)