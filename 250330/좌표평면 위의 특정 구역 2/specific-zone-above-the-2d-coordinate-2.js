const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const points = input.slice(0, n).map(line => line.split(' ').map(Number));
    
let answer = Number.MAX_SAFE_INTEGER

for(let i = 0; i < points.length; i++){
    const newArr = points.filter((_, idx) => idx !== i);
    let minX = Number.MAX_SAFE_INTEGER;
    let minY = Number.MAX_SAFE_INTEGER;
    let maxX = Number.MIN_SAFE_INTEGER;
    let maxY = Number.MIN_SAFE_INTEGER;

    for(let j = 0; j < newArr.length; j++){
        const [x, y] = newArr[j];
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);

        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
    }
    answer = Math.min(answer, (maxX - minX) * (maxY - minY))
}
console.log(answer)