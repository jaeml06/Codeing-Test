const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const people = [];
for (let i = 1; i <= n; i++) {
  const [x, c] = input[i].split(' ');
  people.push([Number(x), c]);
}

const place = Array(10_001).fill(0)

people.forEach(([x, c]) => {
  if(c === 'G'){
    place[x] = 1
  } else {
    place[x] = 2
  }
})
let max = 0;
for(let i = 1; i < 10_001 - k + 1; i++){
  const temp = place.slice(i, k === 1 ? i + 1 : i + k + 1)
  let sum = temp.reduce((prev, cur) => {
    return prev + cur
  }, 0)
  max = Math.max(max, sum)

}

console.log(max)