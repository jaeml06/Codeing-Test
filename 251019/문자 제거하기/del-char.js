const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let string = [...input[0]]

for(let i = 1; i < input.length; i++){
    const n = Number(input[i])
     const idx = n >= string.length ? string.length - 1 : n;
    const temp = [...string.slice(0, idx), ...string.slice(idx + 1)]
    console.log(temp.join('')) 
    string = temp
}
