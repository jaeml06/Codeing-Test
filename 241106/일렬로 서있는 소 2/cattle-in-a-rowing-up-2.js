let fs = require('fs');
let read = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(read[0])

const arr = read[1].split(' ').map(Number);
let answer = 0
for(let i = 0; i < n; i++){
    for(let j = i + 1; j< n; j++){
        for(let k = j + 1; k < n; k++){
            if(arr[i] <= arr[j] && arr[j] <= arr[k]){
                answer += 1
            }
        }
    }
}
console.log(answer)