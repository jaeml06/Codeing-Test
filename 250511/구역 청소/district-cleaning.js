const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const [c, d] = input[1].split(' ').map(Number);

const visited = Array(101).fill(false);

for(let i = a; i < b; i++){
    visited[i] = true
}

for(let  i = c; i < d; i++){
    visited[i] = true
}

const count = visited.reduce((prev, cur) => {
    if(cur){
        return prev + 1
    }
    return prev;
},0)

console.log(count)