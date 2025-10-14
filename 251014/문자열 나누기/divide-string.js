const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1, n + 1)[0].split(' ');

let string = ''

for(const val of arr){
    string += val
}

for (let i = 0; i < string.length; i += 5) {
  console.log(string.slice(i, i + 5));
}