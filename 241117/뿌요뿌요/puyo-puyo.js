let fs = require('fs');
let [temp1, ...temp2] = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(temp1);

const graph = temp2.map(val => val.split(' ').map(Number))

const visited = Array.from({length: n}, () => Array(n).fill(false));
const dx = [-1, 1, 0 , 0]
const dy = [0, 0, -1, 1]
const answer = []

function dfs(x, y, flag){
    let count = 1
    for(let i = 0; i < 4; i++){
        const curX = x + dx[i];
        const curY = y + dy[i];
        if(0 <= curX && curX < n && 0 <= curY && curY < n && !visited[curY][curX] && flag === graph[curY][curX]){
            visited[curY][curX] = true;
            count += dfs(curX, curY, flag);
        }
    }
    return count
}

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(!visited[i][j]){
            visited[i][j] = true
            const count = dfs(j, i, graph[i][j])
            if(count >= 4){
                answer.push(count)
            }
        }
    }
}
if(answer.length > 0){
    console.log(answer.length + ' ' + Math.max(...answer))
}else{
    console.log('0 0')
}
