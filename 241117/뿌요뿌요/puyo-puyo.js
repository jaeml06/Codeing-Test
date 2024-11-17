let fs = require('fs');
let [temp1, ...temp2] = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(temp1);

const graph = temp2.map(val => val.split(' ').map(Number))

const visited = Array.from({length: n}, () => Array(n).fill(false));
const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]
const answer = []

function dfs(y, x, flag){
    let count = 1
    for(let i = 0; i < 4; i++){
        const ny = y + dy[i];
        const nx = x + dx[i];
        
        if(ny >= 0 && ny < n && nx >= 0 && nx < n && 
           !visited[ny][nx] && graph[ny][nx] === flag){
            visited[ny][nx] = true;
            count += dfs(ny, nx, flag);
        }
    }
    return count;
}

for(let y = 0; y < n; y++){
    for(let x = 0; x < n; x++){
        if(!visited[y][x]){
            visited[y][x] = true;
            const count = dfs(y, x, graph[y][x]);
            if(count >= 4){
                answer.push(count);
            }
        }
    }
}

if(answer.length > 0){
    console.log(answer.length + ' ' + Math.max(...answer));
}else{
    console.log('0 0');
}