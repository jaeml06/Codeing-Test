let fs = require('fs');
let [read1] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const [N, M] = read1.split(' ').map(value => Number(value));

console.log([...read1].map(Number).sort((a,b) => b-a).join(''))
