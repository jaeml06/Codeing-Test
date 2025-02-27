const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

let pos = 0;
const visited = {};

commands.forEach(command => {
    const [x, dir] = command.split(" ");
    const move = Number(x);
    
    for (let i = 0; i < move; i++) {
        if (dir === "L") pos--;
        else if (dir === "R") pos++;

        // 방문 횟수 카운트
        visited[pos] = (visited[pos] || 0) + 1;
    }
});

const answer = Object.values(visited).filter(val => val >=2).length;

console.log(answer)