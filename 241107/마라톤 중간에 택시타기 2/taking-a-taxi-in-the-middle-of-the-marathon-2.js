let fs = require('fs')
let [temp, ...read] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(temp);
const arr = read.map(val => val.split(' ').map(Number));
let minPath = Number.MAX_SAFE_INTEGER
for(let i = 1; i < n - 1; i++){
    const temp = arr.filter((_, index) => index !== i);
    let answer = 0
    for(let j = 1; j < temp.length; j++){
        answer += Math.abs(temp[j][0]- temp[j-1][0]) + Math.abs(temp[j][1]- temp[j-1][1])

    }

    minPath = Math.min(minPath, answer)
}
console.log(minPath)