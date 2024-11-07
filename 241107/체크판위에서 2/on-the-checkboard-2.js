let fs = require('fs');
let [temp1, ...temp2] = fs.readFileSync(0).toString().trim().split('\n');
const [R, C] = temp1.split(' ').map(Number);
const arr = temp2.map(val => val.split(' '))

const start = arr[0][0]
const end = arr[R-1][C-1]
let answer = 0
if(start === end){
    console.log(0)
    return
}
for(let i = 1; i < R-2; i++){
    for(let j = 1; j < C-2; j++){
        if(start !== arr[i][j]){
            for(let k = i + 1; k < R - 1; k++){
                for(let m = j + 1; m < C - 1; m++){
                    if(end !== arr[k][m]){
                        answer += 1
                    }
                }
            }
        }

    }
}


console.log(answer)