const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);

const base = 1000;
const grid = Array.from({ length: 2001 }, () => Array(2001).fill(false));

for(let i = rectA[1] + base; i < rectA[3] + base; i++){
  for(let j = rectA[0] + base; j < rectA[2] + base; j++){
    grid[j][i] = true
  }
}

for(let i = rectB[1] + base; i < rectB[3] + base; i++){
  for(let j = rectB[0] + base; j < rectB[2] + base; j++){
    grid[j][i] = true
  }
}

for(let i = rectM[1] + base; i < rectM[3] + base; i++){
  for(let j = rectM[0] + base; j < rectM[2] + base; j++){
    grid[j][i] = false
  }
}
let answer = 0
grid.forEach(val => {
  val.forEach(a => {
    if(a===true){
      answer+=1
    }
  })
})
console.log(answer)