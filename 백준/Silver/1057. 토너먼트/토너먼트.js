let fs = require('fs');
let [read1] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N ,A ,B] = read1.split(' ').map(Number);
let result = 0;
while(A !== B){
  A = parseInt(A/2+A%2);
  B = parseInt(B/2+B%2);
  result++; 
}
console.log(result !== 0 ? result : -1);