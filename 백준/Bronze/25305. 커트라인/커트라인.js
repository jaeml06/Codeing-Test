const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


let input1 = input[0].split(" ");
const num = input1[0];
const award = input1[1];

const grade = input[1].split(" ");

grade.sort((a,b) => b - a);

console.log(grade[award - 1]);