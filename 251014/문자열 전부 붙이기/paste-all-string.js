const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input.slice(1, input[0] + 1)

let string = ''

for(const val of arr){
    string += val
}

console.log(string)