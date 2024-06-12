let fs = require('fs');
let read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N] = read1.shift().split(' ').map(Number);

const temp = []
for(let i = 0; i<N;i++){
  temp[i] = '*'.repeat(i+1);
}
console.log(temp.join('\n'));