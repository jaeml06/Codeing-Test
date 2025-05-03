const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, b] = input[0].split(' ').map(Number);
const p = input.slice(1, 1 + n).map(Number).sort((a, b) => a - b);

let max = 0
for(let i = 0; i < p.length; i++){
    let count = 0
    let sum = 0
    const temp = [...p];
    temp[i] = temp[i] / 2
    for(let j = 0; j < temp.length; j++){
        count++
        sum += temp[j]
        if(sum > b){
            count--
            sum -= temp[j]
            break;
        }
    }
    max = Math.max(max, count)
}

console.log(max)