const words = ["apple", "banana", "grape", "blueberry", "orange"];

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const result = [];

for (const word of words) {
  if (word[2] === input[0] || word[3] === input[0]) {
    result.push(word);
  }
}

console.log(result.join("\n"));
console.log(result.length);