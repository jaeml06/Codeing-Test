let fs = require('fs');
let read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
read1.shift();
const arr = read1.map((value) => value.split(' ').map(Number));
const answer = []
for(let i= 0;i < arr.length; i++){
  const [a, b] = arr[i];
  answer.push(a+b);
}
console.log(answer.join('\n'));