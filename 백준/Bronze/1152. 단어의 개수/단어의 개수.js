let fs = require('fs');
let [read1] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const answer = read1.trim().split(' ').filter(value => value !== '').length
console.log(answer)