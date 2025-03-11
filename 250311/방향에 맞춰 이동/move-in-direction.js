const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const moves = input.slice(1);
const answer = [0, 0]

const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]

moves.forEach(val => {
    const [d, r] = val.split(' ');
    switch(d){
        case 'N':
            answer[1] += dy[3] * r
            break;
        case 'E':
            answer[0] += dx[1] * r
            break;
        case 'W':
            answer[0] += dx[0] * r
            break;
        case 'S':
            answer[1] += dy[2] * r
            break;
    }
})

console.log(answer.join(' '))