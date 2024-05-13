let fs = require('fs');
const [,...read1] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = read1.map(Number).sort((a,b) => a-b);

let sum = 0;
const length = arr.length

for(let i = 1; i<= length; i++){
  const min = arr[i-1];
  sum += Math.abs(min - i);
}
console.log(sum);

