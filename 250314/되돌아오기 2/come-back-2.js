const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = [...input[0]];

let x = 0;
let y = 0;
let dirNum = 0
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let answer =0
const flag = commands.some((val) => {
    if(val === 'F'){
        x += dx[dirNum];
        y += dy[dirNum];
        answer++
    } else if(val === 'R'){
        dirNum = (dirNum + 1) % 4
        answer++
    } else if(val === 'L'){
        dirNum = (dirNum - 1 + 4) % 4
        answer++
    }
    if(x === 0 && y === 0){
        return true;
    }
});

console.log(flag ? answer : -1)