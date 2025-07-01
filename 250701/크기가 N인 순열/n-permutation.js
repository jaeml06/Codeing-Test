const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

function combin(n){
    const result = [];
    const visited = Array(n+1).fill()

    function dfs(path){
        if(path.length === n){
            result.push([...path])
            return;
        }
        for(let i = 1; i <= n; i++){
            if(visited[i]) continue;

            visited[i] = true;
            path.push(i);

            dfs(path);
            
            path.pop();
            visited[i] = false;
        }
    }
    dfs([])
    return result
}

combin(n).forEach(val => {
    console.log(val.join(' '));
});