let fs = require('fs');
let read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = read1.shift().split(' ').map(Number);

const map = read1.map(value => value.split(' ').map(Number));
let visited = Array.from({length : N}, () => Array.from({length : M}, () => false));

const dx = [0, 0, 1, 1, 1, -1, -1, -1];
const dy = [1, -1, 1, 0, -1, 1, 0, -1];

const bfs = (x, y, count) => {
  const queue = [];
  queue.push([x, y, count]);
  visited[y][x] = true
  while(queue.length !== 0){
  let [curX, curY, count] = queue.shift();

  for(let i =0 ; i< 8; i++){
    const nextX = dx[i] + curX;
    const nextY = dy[i] + curY;
    if(0 <= nextX && nextX < M && 0<= nextY && nextY < N && !visited[nextY][nextX]){
      if(map[nextY][nextX] === 1){
        count +=1
        return count;
      }
      queue.push([nextX, nextY, count + 1]);
      visited[nextY][nextX] = true;
      }
    }
  }
} 
const answer = []

for(let i =0; i< N; i++){
  for(let j = 0; j < M; j++){
    if(map[i][j] === 0){
      answer.push(bfs(j, i, 0));
      visited = Array.from({length : N}, () => Array.from({length : M}, () => false));
    }
    
  }
}

console.log(Math.max(...answer))