const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
let line = 1;
const movesA = [];
for (let i = 0; i < n; i++) {
    const [d, t] = input[line++].split(' ');
    movesA.push([d, Number(t)]);
}
const movesB = [];
for (let i = 0; i < m; i++) {
    const [d, t] = input[line++].split(' ');
    movesB.push([d, Number(t)]);
}

const recordA = []
movesA.forEach(([d, t]) => {
    for(let i = 0; i < t; i++){
        if(d === 'R'){
            if(recordA.length === 0){
                recordA.push(1)
            } else {
                recordA.push(recordA[recordA.length -1] + 1);
            }
        } else {
            if(recordA.length === 0){
                recordA.push(-1)
            } else {
                recordA.push(recordA[recordA.length -1] -1);
            }
        }
    }
})

const recordB = []
movesB.forEach(([d, t]) => {
    for(let i = 0; i < t; i++){
        if(d === 'R'){
            if(recordB.length === 0){
                recordB.push(1)
            } else {
                recordB.push(recordB[recordB.length -1] + 1);
            }
        } else {
            if(recordB.length === 0){
                recordB.push(-1)
            } else {
                recordB.push(recordB[recordB.length -1] -1);
            }
        }
    }
})

let answer = -2

recordA.some((val, index) => {
    if(val === recordB[index]){
        answer = index
        return true
    }
    return false
})

console.log(answer + 1)