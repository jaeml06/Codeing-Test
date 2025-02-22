const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const arr1 = input[1].split(' ').map(Number);
const arr2 = input[2].split(' ').map(Number);

arr1.sort((a, b) => a- b)
arr2.sort((a, b) => a- b)


const flag = arr1.every((val, index) => {
    if(val !== arr2[index]){
        return false
    }
    return true
})

console.log(flag ? 'Yes' : 'No')