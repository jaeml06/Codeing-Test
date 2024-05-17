let fs = require('fs');
const read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = read1.shift().split(' ').map(Number);

const map = Array.from(read1, (read) => read.split(' ').map(Number) );
const house = [];
const chicken = [];
for(let i = 0; i< N; i++){
  for(let j = 0; j< N; j ++){
    if(map[i][j] === 1){
      house.push([i, j]);
    }
    if(map[i][j] === 2){
      chicken.push([i, j]);
    }
  }
}

const getMinDistance = () => {
  let sum = 0;
  house.forEach(([hx, hy]) => {
    let min = Infinity;
    chicken.forEach((_, index) => {
      if (check[index] === true) {
        const [cx, cy] = chicken[index];
        min = Math.min(min, Math.abs(hx - cx) + Math.abs(hy - cy));
      }
    });
    sum += min;
  });
  return sum;
};

const check = new Array(chicken.length).fill(false);
let answer = Infinity;

const DFS = (index, count) => {
  if(count === M){
    answer = Math.min(answer, getMinDistance());
    return
  } else {
    for(let i = index; i < chicken.length; i++){
      if(check[i]) continue;
      check[i] = true;
      DFS(i, count + 1);
      check[i] = false;
    }
  }
}

DFS(0, 0)
console.log(answer);
