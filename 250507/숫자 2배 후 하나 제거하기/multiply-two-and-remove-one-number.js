const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);
let min = Number.MAX_SAFE_INTEGER
for(let i = 0; i < n; i++){
    const temp = [...arr];
    let sum = 0
    temp[i] = temp[i] * 2;
    for(let j = 0; j < n; j++){
        const temp2 = [...temp]
        temp2.splice(j, 1)
        for(let j = 0; j < temp2.length - 1; j++){
            sum += Math.abs(temp2[j + 1] - temp2[j])
        }
        min = Math.min(sum, min)
    }

}
console.log(min)