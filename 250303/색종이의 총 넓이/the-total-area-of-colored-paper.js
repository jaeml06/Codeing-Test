const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

const grid = Array.from({ length: 201 }, () => Array(201).fill(false));

rects.forEach(val => {
    const [x, y] = val.map(a => a + 100);
    for(let i = y; i < y + 8; i++){
        for(let j = x; j < x + 8; j++){
            grid[i][j] = true;
        }
    }
})

let answer = 0

grid.forEach(arr => {
    arr.forEach(val => {
        if(val){
            answer+=1
        }
    })
})

console.log(answer)