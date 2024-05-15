let fs = require('fs');
const read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = read1.shift().split(' ').map(Number);
const data = read1.map(value => value.split(' ').map(Number));

const visited = Array.from({length : N}, () => Array(M).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, 1, -1];

const bfs = (startX, startY) => {
  let count = 1;
  const queue = [[startX, startY]];
  visited[startY][startX] = true;
  while(queue.length){
    const [x, y] = queue.shift();

    for(let i =0; i < 4; i++){
      const nx = x + dx[i];
      const ny = y + dy[i];

      if(nx >=0 && ny >=0 && nx < M && ny < N && !visited[ny][nx] && data[ny][nx]){
        visited[ny][nx] = true;
        count +=1;
        queue.push([nx, ny]);
      }
    }
  }
  return count;
}

let count = 0;
let maxWidth = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!visited[i][j] && data[i][j]) {
      count++;
      const width = bfs(j, i);
      maxWidth = Math.max(width, maxWidth);
    }
  }
}

console.log(count);
console.log(maxWidth);
