let fs = require('fs');
let read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

read1.shift();
read1.forEach((value) => {
  const [count, str] = value.split(' ');
  const temp = [...str].map((char) => char.repeat(Number(count)));
  console.log(temp.join(''))
})