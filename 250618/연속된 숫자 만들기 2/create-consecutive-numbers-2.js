const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].split(" ").map(Number);


if(arr[0] + 2 === arr[1] + 1 === arr[2]){
    console.log(0)
} else if(arr[0] + 1 === arr[1] || arr[1] + 1 === arr[2]){
    console.log(1)
} else{
    console.log(2)
}