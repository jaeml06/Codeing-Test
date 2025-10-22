const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let str = ''

for(const val of input[0]){
    if((val >= 'A' && val <= 'Z') || (val >= 'a' && val <= 'z')){
        str += val.toUpperCase()
    }
}

console.log(str)