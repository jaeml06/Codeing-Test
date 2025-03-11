const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let answer = 0

grid.forEach((curY, indexY) => {
    curY.forEach((curX, indexX) => {
        let count = 0;
        for(let i = 0; i< 4; i++){
            const nx = dx[i] + indexX;
            const ny = dy[i] + indexY;
            if(0 <= nx && 0 <= ny && nx < n && ny < n){
                if(grid[ny][nx] === 1){
                    count++
                }
            }

        }
        if(count >= 3){
            answer++;
        }
    })
})

console.log(answer)