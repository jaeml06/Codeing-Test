const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
segments.sort(([x1, x2], [x3, x4]) => x1 - x3);
let count = 0
for(let i = 0; i < segments.length; i++){
    const [x1, x2] = segments[i];
    let flag = true
    for(let j = 0; j < segments.length; j++){
        const [x3, x4] = segments[j];
        if(x1 > x3){
            if(x2 < x4){
                flag= false
            }
        }
        if(x1 < x3){
            if(x2 > x4){
                flag = false
            }
        }
    }
    if(flag){
        count++
    }
}

console.log(count)