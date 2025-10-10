const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');
input.reverse()

for(const word of input){
    console.log(word)
}