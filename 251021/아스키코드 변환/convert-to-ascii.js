const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let x = input[0];
let a = Number(input[1]);

console.log(x.charCodeAt(0), String.fromCharCode(a))