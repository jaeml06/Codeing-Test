let fs = require('fs');
let [temp1, ...temp2] = fs.readFileSync(0).toString().trim().split('\n');

const [n ,t] = temp1.split(' ').map(Number);
const arr = temp2.map(val => val.split(' ', n).map(Number));


for(let i = 0; i < t; i++){
    const box1 = arr[0].pop();
    const box2 = arr[1].pop();
    const box3 = arr[2].pop();

    arr[0].unshift(box3);
    arr[1].unshift(box1);
    arr[2].unshift(box2);
}
console.log(arr[0].join(' '));
console.log(arr[1].join(' '));
console.log(arr[2].join(' '));