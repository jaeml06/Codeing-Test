let fs = require('fs');
let [read1] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = read1.split(' ').map(value => Number(value));

const arr = Array.from({length : M}, () => 0);
const visited = Array.from({length: N + 1}, () => false);
dfs(0, 1)
function dfs(count, start){
    if(count === M){
        console.log(arr.join(' '));
        return;
    }
    for(let i = start; i<= N; i++){
        if(!visited[i]){
            arr[count] = i;
            visited[i] = true;
            dfs(count + 1, i);
            visited[i] = false;
        }
    }
}
