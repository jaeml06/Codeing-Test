const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let index = 0;
const [n, m] = input[index++].split(' ').map(Number);
let A_moves = [];
for (let i = 0; i < n; i++) {
  const [v, t] = input[index++].split(' ').map(Number);
  A_moves.push([v, t]);
}
let B_moves = [];
for (let i = 0; i < m; i++) {
  const [v, t] = input[index++].split(' ').map(Number);
  B_moves.push([v, t]);
}

let answer = 0

const A_pos = [];
A_moves.forEach(([v, t]) => {
  for(let i = 0; i< t; i++){
    A_pos.push(A_pos.length === 0 ? v : v + A_pos[A_pos.length - 1])
  }
})

const B_pos = [];
B_moves.forEach(([v, t]) => {
  for(let i = 0; i< t; i++){
    B_pos.push(B_pos.length === 0 ? v : v + B_pos[B_pos.length - 1])
  }
})

let flag =null

A_pos.forEach((val, index) => {
  if(flag === 'A'){
    if(val === B_pos[index]){
      answer++;
      flag = 'AB';
    }else if(val < B_pos[index]){
      answer++;
      flag = 'B';
    }
  }else if(flag === 'B'){
    if(val === B_pos[index]){
      answer++;
      flag = 'AB';
    }else if(val > B_pos[index]){
      answer++;
      flag = 'A';
    }
  }else if(flag === 'AB'){
    if(val < B_pos[index]){
      answer++;
      flag = 'B';
    }else if(val > B_pos[index]){
      answer++;
      flag = 'A';
    }
  } else {
    if(val < B_pos[index]){
      answer++;
      flag = 'B';
    }else if(val > B_pos[index]){
      answer++;
      flag = 'A';
    }else if(val === B_pos[index]){
      answer++;
      flag = 'AB';
    }
  }
})
console.log(answer)