const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const rectangles = [];
for (let i = 1; i <= n; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    rectangles.push([x1 + 100, y1 + 100, x2 + 100, y2 + 100]);
}


const grid = Array.from({length : 201}, () => Array(201).fill(0));

rectangles.forEach(([x1, y1, x2, y2], index) => {
    if(index % 2 === 0){
        for(let i = y1; i < y2; i++){
            for(let j = x1; j < x2; j++){
                grid[i][j] = 1
            }
        }
    } else {
        for(let i = y1; i < y2; i++){
            for(let j = x1; j < x2; j++){
                grid[i][j] = 2
            }
        }
    }
})
let answer = 0

grid.forEach(arr => {
    arr.forEach(val => {
        if(val === 2){
            answer+=1
        }
    })
})

console.log(answer)