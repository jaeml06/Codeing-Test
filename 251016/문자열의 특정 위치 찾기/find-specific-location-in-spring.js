const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const [string, target] = input[0].split(' ')

const answer = string.indexOf(target)

if(answer == -1){
    console.log('No')
}else{
    console.log(answer)
}