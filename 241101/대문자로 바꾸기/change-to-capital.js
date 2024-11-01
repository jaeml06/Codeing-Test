let fs = require('fs');
let read = fs.readFileSync(0).toString().trim().split('\n');
read = read.map(str => str.split(' ').map(val=> val.toUpperCase()));

for(const i of read){
    console.log(i.join(' '))
}