const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// 시작 위치
let pos = 0;

// 선분(구간) 방문 횟수 저장용
const visitedEdges = {};

commands.forEach(command => {
  const [x, dir] = command.split(" ");
  const move = Number(x);

  for (let i = 0; i < move; i++) {
    // 이동 전 위치
    const prev = pos;

    // 방향에 따라 이동
    if (dir === "L") {
      pos--;
    } else if (dir === "R") {
      pos++;
    }

    // 선분의 양 끝점을 [작은 값, 큰 값]으로 정렬해 문자열 키 생성
    const minP = Math.min(prev, pos);
    const maxP = Math.max(prev, pos);
    const edgeKey = `${minP},${maxP}`;

    // 해당 선분(구간)을 방문 횟수 +1
    visitedEdges[edgeKey] = (visitedEdges[edgeKey] || 0) + 1;
  }
});

const answer = Object.values(visitedEdges).filter(val => val >= 2).length;
console.log(answer);