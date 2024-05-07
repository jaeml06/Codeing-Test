let fs = require('fs');
const read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
read1.shift();
const A = read1[0].split(' ').map(Number).sort((a, b) => a-b);
const B = read1[1].split(' ').map(Number).sort((a, b) => b-a);

let sum = 0;
A.forEach((value, index) => {
  sum += B[index] * value;
})
console.log(sum);