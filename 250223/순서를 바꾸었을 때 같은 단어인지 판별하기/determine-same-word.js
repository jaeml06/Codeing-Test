const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n').map(val => val.trim( ));

const str1 = [...input[0]]
const str2 = [...input[1]]

str1.sort()
str2.sort()

console.log(str1.join() === str2.join() ? 'Yes' : 'No')

