let fs = require('fs');
let read = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(read[0])
const arr = read[1].split(' ').map(Number)
let answer = Number.MAX_SAFE_INTEGER;
for(let i = 0; i < n; i++){
    const temp = arr.reduce((acc,cur,index) => {
        return acc + cur * Math.abs(index - i)
    }, 0)
    if(temp < answer){
        answer = temp
    }
}
console.log(answer)