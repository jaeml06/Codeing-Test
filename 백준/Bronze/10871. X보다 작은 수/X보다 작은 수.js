let fs = require('fs');
let read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, X] = read1[0].split(' ').map(Number);

const arr = read1[1].split(' ').map(Number);

const answer = arr.reduce((prev, cur) => {
  if(cur < X){
    prev += `${cur} `;
  }
  return prev;
}, '')
console.log(answer);