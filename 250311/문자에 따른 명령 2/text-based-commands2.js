const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = [...input[0]];

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

let dirNum = 3;
const pos = [0, 0]

commands.forEach(command => {
    if(command ==='L'){
        dirNum = (dirNum - 1 + 4) % 4;  // 음수 방지
    }else if(command === 'R'){
        dirNum = (dirNum + 1) % 4
    }else if(command === 'F'){
        pos[0] += dx[dirNum]
        pos[1] += dy[dirNum]
    }
})

console.log(pos.join(' '))