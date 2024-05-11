let fs = require('fs');
const read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = read1[1].split(' ').map(Number);

console.log(Math.min(...arr) + ' ' + Math.max(...arr));
