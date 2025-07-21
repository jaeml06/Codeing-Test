const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + Number(n)).map(line => line.split(' ').map(Number));

const answer = []
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
function dfs(x, y, visited, k){
for(let i = 0; i<4; i++){
    const nx = x + dx[i];
    const ny = y + dy[i];

    if(0<= nx && nx < m && 0 <= ny && ny < n && !visited[ny][nx] && grid[ny][nx] > k){
        visited[ny][nx] = true;
        dfs(nx, ny, visited, k)
    }
}
}

for(let k = 1; k <= 100; k ++){
    const visited = Array(n).fill(false).map(() => Array(m).fill(false));
    let count = 0
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(!visited[i][j] && grid[i][j] > k){
                visited[i][j] = true;
                dfs(j, i, visited, k)
                count++;
            }
        }
    }
    if(Math.max(...answer.map(val => val[1])) <= count){
        answer.push([k, count])
    }
      
}
if (answer.length > 0) {
    const maxSafePlace = Math.max(...answer.map(val => val[1]));
    const mink = answer.filter(val => val[1] === maxSafePlace).sort((a, b) => a[0] - b[0])[0][0];
    console.log(mink + ' ' + maxSafePlace);
} else {
    console.log("1 0");
}