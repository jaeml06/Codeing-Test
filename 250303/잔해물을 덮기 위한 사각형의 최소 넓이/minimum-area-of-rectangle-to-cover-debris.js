const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(val => Number(val) + 1000);
const rect2 = input[1].split(' ').map(val => Number(val) + 1000);

const grid = Array.from({length : 2001}, () => Array(2001).fill(false));

for (let i = rect1[1]; i <= rect1[3]; i++) {
    for (let j = rect1[0]; j <= rect1[2]; j++) {
        grid[i][j] = true;
    }
}

for (let i = rect2[1]; i < rect2[3]; i++) {
    for (let j = rect2[0]; j < rect2[2]; j++) {
        grid[i][j] = false;
    }
}

let maxX = Number.MIN_SAFE_INTEGER
let maxY = Number.MIN_SAFE_INTEGER

let minX = Number.MAX_SAFE_INTEGER
let minY = Number.MAX_SAFE_INTEGER

grid.forEach((arr, indexY) => {
    arr.forEach((val, indexX) => {
        if(val){
            maxX = Math.max(maxX, indexX);
            maxY = Math.max(maxY, indexY);
            minX = Math.min(minX, indexX);
            minY = Math.min(minY, indexY);

        }
    })
})

console.log((maxX - minX) * (maxY - minY))