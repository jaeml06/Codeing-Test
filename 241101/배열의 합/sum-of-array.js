let fs = require('fs');
let read = fs.readFileSync(0).toString().trim().split('\n');

for(const arr of read){
    const temp = arr.split(' ').map(val => +val)
    let sum = 0
    for(const i of temp){
        sum += i
    }
    console.log(sum)
}