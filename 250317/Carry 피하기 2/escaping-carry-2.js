const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input.slice(0, 19).map(row => row.split(' ').map(Number));

let answer = -1
for(let i = 0; i< arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
        for(let k = j + 1; k < arr.length; k++){
            let sum = 0
            let flag = true
            let a = arr[i];
            let b = arr[j];
            let c = arr[k];
            let index = 1

            while(a !== 0 || b !== 0 || c !== 0){
                let temp1 = a % 10;
                let temp2 = b % 10;
                let temp3 = c % 10;
                if(temp1 + temp2 + temp3 >= 10){
                    flag = false
                    break;
                } else{
                    sum += temp1 * index + temp2*index + temp3*index
                }
                a = Math.floor(a / 10);
                b = Math.floor(b / 10);
                c = Math.floor(c / 10);
                index *= 10
            }
            if(flag){
                answer = Math.max(answer, sum)
            }
            
        }
    }
}
console.log(answer)