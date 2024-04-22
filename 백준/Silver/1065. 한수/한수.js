let fs = require('fs');
let [read] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N] = read.split(' ').map(value => Number(value));

let answer = 0;

for(let i = 1; i <= parseInt(N); i++){
    const str = i.toString();
    if(str.length <= 2){
        answer++
    } else {
        const arr = [...str].map(value => Number(value));
        let flag = true;
        const temp = arr[1] - arr[0]
        for(let j = 0; j < arr.length -1; j++){
            if(arr[j + 1] - arr[j] !== temp){
                flag = false;
                break;
            }
        }
        if(flag){
            answer++;
        }
        
    }
}
console.log(answer);