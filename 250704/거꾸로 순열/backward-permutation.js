const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const visited = Array(n+1).fill(false)
const picked = [];
function permutation(cnt){

    if(cnt === n){
        console.log(picked.join(' '))
    }

    for(let i = n; i >= 1; i--){
        if(visited[i] === true) continue;

        visited[i] = true;
        picked.push(i);

        permutation(cnt+1);

        visited[i] = false;
        picked.pop() 
    }
}

permutation(0)