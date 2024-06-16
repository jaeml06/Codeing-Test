let fs = require('fs');
let read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N] = read1[0].split(' ').map(Number);

for (i = 1; i < N+1; i++) {
  rst = ' '.repeat(N-i) + '*'.repeat(i)
  console.log(rst)
}