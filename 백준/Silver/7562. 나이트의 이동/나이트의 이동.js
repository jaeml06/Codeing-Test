let fs = require('fs');
let read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [T] = read1.shift().split(' ').map(Number);
const dx = [-2,-2,-1,-1, 1, 1, 2, 2];
const dy = [-1,1,-2,2,-2,2,-1,1]

while(T > 0){
  const [I] = read1.shift().split(' ').map(Number);
  const startPos = read1.shift().split(' ').map(Number);
  const targetPos = read1.shift().split(' ').map(Number);
  const visited = Array.from({length:I}, ()=> Array.from({length:I}, () => false));
  const bfs = (x, y, count) => {
    const queue = [];
    queue.push([x, y, count]);
    visited[y][x] = true;
    while(queue.length !== 0){
      const [curX, curY, curCount] = queue.shift();
      for(let i = 0; i< 8; i++){
        const nextX = dx[i] + curX;
        const nextY = dy[i] + curY;
        if(0<= nextX && nextX < I && 0<= nextY && nextY < I && !visited[nextY][nextX]){
          if(nextX === targetPos[0] && nextY === targetPos[1]){
            return curCount+1;
          }
          queue.push([nextX, nextY, curCount + 1]);
          visited[nextY][nextX] = true;
        }
      }
    }
    return 0
  }
  console.log(bfs(startPos[0], startPos[1], 0));
  T--;
}