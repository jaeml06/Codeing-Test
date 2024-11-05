let fs = require('fs');
let read = fs.readFileSync(0).toString().trim().split('\n');

const arr = [...read[0]]
answer = 0
for(const [index, value] of arr.entries()){
    if(value === '('){
        for(let i = index; i< arr.length; i++){
            if(arr[i] === ')'){
                answer += 1
            }
        }
    }

}
console.log(answer)