let fs = require('fs');
let read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = read1.shift().split(' ').map(Number);
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const map = read1.map(value => value.split(''));
const visited = Array.from({length : N}, () => Array.from({length : M}, () => false));
let count = 0;



const dfs = (x, y) => {
  const queue = [];
  queue.push([x, y]);
  visited[y][x] = true
  while(queue.length !== 0){
    const [curX, curY] = queue.shift();
    for(let i =0; i < 4; i++){
      const nextX = dx[i] + curX;
      const nextY = dy[i] + curY;

      if(nextX >= 0 && nextX < M && nextY >= 0 && nextY < N && !visited[nextY][nextX] && map[nextY][nextX] !== 'X'){
        
        if(map[nextY][nextX] === 'P'){
          count++;
        }
        visited[nextY][nextX] = true
        queue.push([nextX, nextY]);
      }
    }
  }
}

for(let i = 0; i< N; i++){
  for(let j = 0; j< M; j++){
    if(map[i][j] === 'I'){
      dfs(j, i);
    }
  }
}

console.log(count === 0 ? 'TT' : count);