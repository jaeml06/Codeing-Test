let fs = require('fs');
const read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
read1.pop()
let answer = ''
read1.forEach(value => {
const flag = [...value].every((char, index) => {
    const temp = [...value]
    return char === temp[temp.length-1-index]
  })
  if(flag){
    answer += 'yes' + '\n'
  }else{
    answer+= 'no' + '\n'
  }
})

console.log(answer);
