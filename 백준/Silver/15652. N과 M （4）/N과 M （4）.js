let fs = require('fs');
let [read1] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = read1.split(' ').map(value => Number(value));

const arr = []
dfs(0, 1)
function dfs(count, start){
    if(count === M){
        console.log(arr.join(' '));
        return;
    }
    for(let i = start; i<= N; i++){
        arr.push(i)
        dfs(count + 1, i);
        arr.pop();
    }
}
