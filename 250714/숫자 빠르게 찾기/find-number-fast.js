const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
const queries = input.slice(2, 2 + m).map(Number);

function binarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right)/2);
        if(arr[mid] === target){
            return mid + 1
        }
        if(arr[mid] > target){
            right = mid - 1
        }
        if(arr[mid] < target){
            left = mid + 1
        }
    }
    return -1;
}

queries.forEach(val => {
    const a = binarySearch(numbers, val)
    console.log(a)
})