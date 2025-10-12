const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[0].split(' ').reverse()

arr.forEach(val => console.log(val))