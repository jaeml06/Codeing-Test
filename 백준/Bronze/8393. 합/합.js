let fs = require('fs');
let read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(read1.shift());
let answer = 0;
for(let i = 1; i<= N; i++){
  answer += i
}
console.log(answer)