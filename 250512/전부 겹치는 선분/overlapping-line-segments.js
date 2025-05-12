const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}
const visited = new Map()
for(let i = 0; i < segments.length; i++){
    const [x, y] = segments[i];
    for(let j = x; j <= y; j++){
        visited.set(j, (visited.get(j) || 0) + 1)
    }
}
let flag = false
for(val of visited.values()){
    if(val === n){
        flag = true
    }
}
console.log(flag ? 'Yes' : 'No')