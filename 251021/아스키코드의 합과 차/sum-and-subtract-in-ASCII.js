const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ')

let num1 = a.charCodeAt(0);
let num2 = b.charCodeAt(0);

console.log(num1 + num2, num1 > num2 ? num1 - num2 : num2 - num1)