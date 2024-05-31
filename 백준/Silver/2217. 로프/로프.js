let fs = require('fs');
let read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(read1.shift());

const arr = read1.map(Number).sort((a, b) => b-a);

let max = 0
for(let i =0; i < N; i++){
  max = Math.max(arr[i] * (i+1), max);
}
console.log(max)

