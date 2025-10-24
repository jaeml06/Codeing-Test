const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let str = '';
for (let i = 0; i < input.length; i++) {
    if (input[i] >= 'a' && input[i] <= 'z') {
        str += input[i].toUpperCase();
    }
    else {
        str += input[i].toLowerCase();
    }
}

console.log(str);
