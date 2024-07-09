let fs = require('fs');
let read1 = fs.readFileSync(0).toString().trim().split('\n');
const A = read1[1].split(' ').map(Number);
const B = new Set(read1[2].split(' ').map(Number));

let answer = new Set([...A, ...B]);

A.forEach((a) => {
  if(B.has(a)){
    answer.delete(a)
  }
})
console.log(answer.size)