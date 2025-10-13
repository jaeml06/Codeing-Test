const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const temp = []
let char = ''
let count = 1
for(let i = 0; i < input[0].length; i++){
    if(i === 0){
        char = input[0][i]
    }else{
        if(char === input[0][i]){
            count++
            if(i === input[0].length-1){
                temp.push(`${char}${count}`)
                break;
            }
        }else if(char !== input[0][i]){
            temp.push(`${char}${count}`)
            char = input[0][i]
            count = 1
        }
    }
}
const string = temp.join('')
console.log(string.length)
console.log(temp.join(''))