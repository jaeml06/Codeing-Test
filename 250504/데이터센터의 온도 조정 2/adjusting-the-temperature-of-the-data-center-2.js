const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, c, g, h] = input[0].split(' ').map(Number);
const ta = [], tb = [];
for (let i = 1; i <= n; i++) {
    const [taValue, tbValue] = input[i].split(' ').map(Number);
    ta.push(taValue);
    tb.push(tbValue);
}
let max = 0;
for(let i = 0; i <= 1000; i++){
    let sum = 0;
    for(let j = 0; j < n; j++){
        if(i < ta[j]){
            sum += c
        }else if(i>= ta[j] && i <= tb[j]){
            sum += g
        } else {
            sum += h
        }
    }
    max = Math.max(sum, max)
}
console.log(max)