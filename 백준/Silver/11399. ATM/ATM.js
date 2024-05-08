let fs = require('fs');
const read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
read1.shift();
const arr = read1[0].split(' ').map(Number).sort((a, b) => a-b);

let sum = 0
arr.reduce((pre, cur) => {
  sum += pre + cur
  return (pre + cur);
}, 0)
console.log(sum);