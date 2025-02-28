const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

let pos = 0;

// 선분(구간) 방문 횟수 저장용
const visitedEdges = {};

commands.forEach(command => {
  const [x, dir] = command.split(" ");
  const move = Number(x);

  for (let i = 0; i < move; i++) {
    if (dir === "L") {
      visitedEdges[pos.toString()] = 'W'
      pos--;
      if(i === move - 1){
        pos++
      }
    } else if (dir === "R") {
      visitedEdges[pos.toString()] = 'B'
      pos++;
      if(i === move - 1){
        pos--
      }
    }
  }
});



const answer = Object.values(visitedEdges)

console.log([answer.filter(val => val === 'W').length,answer.filter(val => val === 'B').length].join(' '));