let fs = require('fs');
let [asd, ...rest] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = asd.split(' ')[0]
const condition = rest.map(value => value.split(' ').map(a => Number.parseInt(a)) )

const arr = Array.from({length:N}, () => false);
condition.forEach(([L, I]) => {
  for(let i =L - 1; i< arr.length; i += I){
    arr[i] = true;
  }
})
console.log(arr.filter(value => !value).length)