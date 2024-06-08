let fs = require('fs');
let read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N] = read1[0].split(' ').map(Number);
const answer = []
for(let i =1; i<=9; i++){
  answer.push(`${N} * ${i} = ${N * i}`)
}

console.log(answer.join('\n'));