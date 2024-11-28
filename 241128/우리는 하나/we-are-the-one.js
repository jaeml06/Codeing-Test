let fs = require('fs');
let [temp1, ...temp2] = fs.readFileSync(0).toString().trim().split('\n');

const [n, k, u, d] = temp1.trim().split(/\s+/).map(Number);

const graph = temp2.map(val => val.trim().split(/\s+/).map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function combinations(arr, k) {
    const result = [];
    const positions = [];
    for (let i = 0; i < arr.length; i++) {
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

function bfs(startPositions, visited) {
    const queue = [];
    for (const pos of startPositions) {
        const { x, y } = pos;
        if (!visited[y][x]) {
            visited[y][x] = true;
            queue.push([x, y]);
        }
    }
    let head = 0;

    while (head < queue.length) {
        const [currentX, currentY] = queue[head++];
        for (let i = 0; i < 4; i++) {
            const nextX = currentX + dx[i];
            const nextY = currentY + dy[i];

            if (
                0 <= nextX && nextX < n &&
                0 <= nextY && nextY < n &&
                !visited[nextY][nextX]
            ) {
                const heightDiff = Math.abs(graph[currentY][currentX] - graph[nextY][nextX]);
                if (u <= heightDiff && heightDiff <= d) {
                    visited[nextY][nextX] = true;
                    queue.push([nextX, nextY]);
                }
            }
        }
    }

    return queue.length;
}

const arr = combinations(graph, k);
let maxSum = Number.MIN_SAFE_INTEGER;

arr.forEach(poses => {
    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    const totalVisited = bfs(poses, visited);
    maxSum = Math.max(maxSum, totalVisited);
});

console.log(maxSum);