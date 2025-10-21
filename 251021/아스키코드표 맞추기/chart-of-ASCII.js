const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let str = "";
for (let elem of input) {
    str += String.fromCharCode(elem) + " ";
}
console.log(str);