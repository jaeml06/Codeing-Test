let fs = require('fs');
const read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
read1.shift()
const arr = read1.map(Number);
console.log(arr.sort((a, b) => a - b).join('\n'))





