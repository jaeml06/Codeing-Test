let fs = require('fs');
let [read1] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = read1.split(' ').map(value => Number(value));
const arr = [];
let str = '';
dfs(0)


function dfs(count){
    if(count === M){
        str += `${arr.join(' ')}\n`;
        return
    }
    else { 
        count++;
        for(let i = 1; i <= N; i++){
            arr.push(i);
            dfs(count);
            arr.pop();
        }
    }
}
console.log(str)