const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);

let count = 0

for(let  i = 0; i < n; i++){
    let temp = 0
    while(a[i] > b[i]){
        a[i] -= 1
        temp++
    }
    if(i < n - 1){
        a[i+1] += temp;
    }
    count+=temp
}

console.log(count)