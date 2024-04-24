let fs = require('fs');
let [read1, read2, read3] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(read1);
const x = Number(read3);
const arr = read2.split(' ').map((value) => Number(value)).sort((a, b) => a- b);

let start = 0;
let end = n - 1;
let answer = 0;

while(start < end){
    const temp = arr[start] + arr[end];
    if( temp === x){
        start++;
        answer++;
    } else if(temp < x){
        start++;
    } else if(temp > x){
        end--;
    }
}
console.log(answer);