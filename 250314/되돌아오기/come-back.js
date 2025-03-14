const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const moves = input.slice(1);

const dir = {
    'W': [-1, 0],
    'E': [1, 0],
    'S': [0, -1],
    'N': [0, 1]
};
let x = 0;
let y = 0;

let answer = 0

const flag = moves.some((val) => {
    const [d, t] = val.split(' ');
    for(let i = 0; i< Number(t); i++){
        x += dir[d][0];
        y += dir[d][1];
        answer++
        if(x === 0 && y===0){
            return true
        }
    }
})

console.log(flag ? answer : -1)