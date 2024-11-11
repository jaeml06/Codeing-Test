let fs = require('fs');
let [temp1, ...temp2] = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = temp1[0].split(' ').map(Number)
const graph = temp2.map((val) => val.split(' ').map(Number))
const visited = Array.from({length: n},() => Array(m).fill(false))

const dx = [1, 0]
const dy = [0, 1]

function dfs(x, y){
    for(let i = 0; i< 2; i++){
        const newX = x + dx[i];
        const newY = y + dy[i];

        if(0 <= newY && n > newY && 0 <= newX && m >= newX && !visited[newY][newX] && graph[newY][newX] === '1'){
            visited[newY][newX] = true
            dfs(newX, newY)
        }
    }
}

console.log(visited[n-1][m-1] ? 1 : 0)

