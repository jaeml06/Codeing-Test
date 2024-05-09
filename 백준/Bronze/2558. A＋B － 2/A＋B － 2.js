let fs = require('fs');
const read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = read1.map(Number);

let sum = arr[0] + arr[1]
console.log(sum);