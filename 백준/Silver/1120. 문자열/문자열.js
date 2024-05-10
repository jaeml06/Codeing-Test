let fs = require('fs');
const read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = read1[0].split(' ');

let min = arr[1].length

for(let i =0; i <= arr[1].length - arr[0].length; i++){
  let temp = 0;
  for(let j =0; j <arr[0].length; j++){
    if(arr[0][j] !== arr[1][i+j]){
      temp++;
    }
  }
  min = Math.min(temp, min);
}
console.log(min)