const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const points = input.slice(1).map(line => line.split(' ').map(Number));

function getCombinations(arr, selectCount) {
  const result = [];

  function dfs(start, path) {
    if (path.length === selectCount) {
      result.push([...path]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      dfs(i + 1, path);
      path.pop();
    }
  }

  dfs(0, []);
  return result;
}

function getMaxArea(points) {
  const combs = getCombinations(points, 3);
  let maxDoubleArea = 0; // (밑변 × 높이)

  for (const [a, b, c] of combs) {
    const tri = [a, b, c];

    // 세 점 중 두 점이 x좌표가 같고, 다른 하나가 y좌표가 같은 경우
    for (let i = 0; i < 3; i++) {
      const [x1, y1] = tri[i];
      const [x2, y2] = tri[(i + 1) % 3];
      const [x3, y3] = tri[(i + 2) % 3];

      if (y1 === y2 && x1 === x3) {
        const base = Math.abs(x1 - x2);
        const height = Math.abs(y1 - y3);
        maxDoubleArea = Math.max(maxDoubleArea, base * height);
      }
      if (x1 === x2 && y1 === y3) {
        const base = Math.abs(y1 - y2);
        const height = Math.abs(x1 - x3);
        maxDoubleArea = Math.max(maxDoubleArea, base * height);
      }
    }
  }

  return maxDoubleArea;
}

console.log(getMaxArea(points));