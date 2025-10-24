const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let str = ''
for (let i = 0; i < input[0].length; i++){
    if ((input[0][i] >= 'A' && input[0][i] <= 'Z') || (input[0][i] >= 'a' && input[0][i] <= 'z')) {
        str += input[0][i].toLowerCase();
    } else if (input[0][i] >= '0' && input[0][i] <= '9') {
        str += input[0][i];
    }
}

console.log(str)