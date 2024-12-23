let fs = require('fs');
let [temp1] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(temp1)
let count = 0;
const temp = [];

function isCheck(arr) {
  let length = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      length++;
    } else {
      if (length !== arr[i - 1]) return false;
      length = 1;
    }
  }
  return length === arr[arr.length - 1];
}

function recur(length) {
  if (length === n) {
    if (isCheck(temp)) {
      count++;
    }
    return;
  }

  for (let i = 1; i <= 4; i++) {
    temp.push(i);
    recur(length + 1);
    temp.pop();
  }
}

recur(0);
console.log(count);