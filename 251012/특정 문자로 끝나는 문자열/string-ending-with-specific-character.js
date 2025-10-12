const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input.slice(0, 10)

const answer = []

arr.forEach(val => {
  if(val[val.length - 1] === input[10]){
    answer.push(val)
  }
})
if(answer.length === 0){
  console.log('None')
}else{
  answer.forEach(val => console.log(val))
}