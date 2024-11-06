let fs = require('fs');
let [temp, ...read] = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(temp)
const arr = read.map(value => value.split(' ').map(Number))

let maxCnt = 0;

for(let i = 0; i < n; i++){
    for(let j = 0; j < n - 2; j++){
        maxCnt = Math.max(maxCnt, arr[i][j] + arr[i][j + 1] + arr[i][j + 2]);
    }
}

console.log(maxCnt);