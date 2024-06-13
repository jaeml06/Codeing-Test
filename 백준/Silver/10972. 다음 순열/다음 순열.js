let fs = require('fs');
let read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(read1[0]);
let numbers = [];
for (let i = 1; i <= N; i++) numbers.push(i); 
let prev = read1[1].split(" ").map((i) => Number(i));
 
let sortNumbers = [...numbers].sort((a, b) => b - a);
if (prev.every((num, index) => num === sortNumbers[index])) console.log(-1);
else {
  let i = N - 2;
  while (prev[i] > prev[i + 1]) i--;
 
  let j = N - 1;
  while (prev[i] > prev[j]) j--;
 
  [prev[i], prev[j]] = [prev[j], prev[i]];
 
  let rest = prev.slice(i + 1); 
  rest.sort((a, b) => a - b);
  let answer = [...prev.slice(0, i + 1), ...rest]; 
  console.log(answer.join(" "));
}