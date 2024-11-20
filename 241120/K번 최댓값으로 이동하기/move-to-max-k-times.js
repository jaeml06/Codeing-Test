let fs = require('fs');
let read = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = read.splice(0, 1)[0].split(' ').map(Number);
const graph = read.splice(0, n).map(val => val.split(' ').map(Number));
const [startR, startC] = read.splice(0, 1)[0].split(' ').map(Number);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let visited = [];
let move = false;
const max = { val: 0, r: startR - 1, c: startC - 1 }; 
let q = [];

function checkMax(nx, ny) {
  if (graph[nx][ny] < max.val) return;
  if (graph[nx][ny] > max.val) {
    max.val = graph[nx][ny];
    max.r = nx;
    max.c = ny;
    move = true;
    return;
  }
  if (graph[nx][ny] === max.val && nx < max.r) {
    max.r = nx;
    max.c = ny;
    move = true;
    return;
  }
  if (graph[nx][ny] === max.val && nx === max.r && ny < max.c) {
    max.c = ny;
    move = true;
    return;
  }
}

function bfs(maxVal) {
  while (q.length) {
    let [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < n &&
        graph[nx][ny] < maxVal &&
        !visited[nx][ny]
      ) {
        q.push([nx, ny]);
        checkMax(nx, ny);
        visited[nx][ny] = true;
      }
    }
  }
}

for (let i = 0; i < k; i++) {
  move = false;
  let [r, c] = [max.r, max.c];
  visited = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => false)
  );

  q.push([r, c]);
  visited[r][c] = true;
  bfs(graph[r][c]);
  max.val = 0;
  if (!move) break;
}

console.log(max.r + 1 + " " + (max.c + 1));