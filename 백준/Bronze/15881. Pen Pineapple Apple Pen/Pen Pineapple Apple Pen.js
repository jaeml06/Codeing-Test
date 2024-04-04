let fs = require('fs');
let [N, rest] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = 0;

let index = 0

while(index < rest.length){
    let tempIndex = rest.indexOf('pPAp', index);
    if(tempIndex === -1) break;
    answer++;
    index = tempIndex + 4;
}

console.log(answer);