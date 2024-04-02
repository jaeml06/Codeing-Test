let fs = require('fs');
let [n] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr;

if(n % 2 === 0){
arr = Array.from({length:n},(_,index) => index % 2 === 0 ? 1 : 2);
} else {
  arr = Array.from({length : n-1}, (_,index) => index % 2 === 0 ? 1 : 2);
  arr.push(3);
}
console.log(arr.join(' '));