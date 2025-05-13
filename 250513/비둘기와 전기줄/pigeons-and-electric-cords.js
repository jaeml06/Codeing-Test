const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const movements = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

const map = new Map();
movements.forEach(([target, pos]) => {
    map.set(target, map.has(target) ? [...map.get(target), pos] : [pos])
})
let totalCount = 0
for(const [target, poses] of map.entries()){
    let count = 0
    let curPos = poses[0];
    for(let i = 0; i < poses.length; i++){
        if(curPos !== poses[i]){
            count++
            curPos = poses[i]
        }
    }
    totalCount += count
}

console.log(totalCount)