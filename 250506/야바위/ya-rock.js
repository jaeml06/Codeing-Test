const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' ').map(Number));

let max = 0

for(let i = 1; i <= n; i++){
            const arr = Array(n).fill(false);
        arr[i - 1]=true;
    let count = 0
    for(let j = 0; j < 3; j++){


        const temp = arr[commands[j][1] - 1];
        arr[commands[j][1] - 1] = arr[commands[j][0] - 1];
        arr[commands[j][0] - 1] = temp;
        if(arr[commands[j][2] - 1]){
            count++
        }
    }
    max = Math.max(max, count)
}
console.log(max)