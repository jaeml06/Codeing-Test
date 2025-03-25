const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const people = Array(101).fill('E');
for (let i = 0; i < n; i++) {
    const [posStr, letter] = input[i].split(' ');
    const pos = Number(posStr);
    people[pos] = letter
}
let answer = 0
for(let i = 0; i < people.length; i++){
    let countG = 0;
    let countH = 0;
    let max = 0;
    if(people[i] !== 'E'){
        if(people[i] === 'G'){
            countG++
        }else {
            countH++
        }
        for(let j = i; j < people.length; j++){
            if(people[j] !== 'E'){
                if(people[j] === 'G' && i !== j){
                    countG++
                }else if(people[j] === 'H' && i !== j) {
                    countH++
                }
                if((countG !== 0 && countH === 0) || (countG === 0 && countH !==0) || (countG === countH)){
                    max = Math.max(max, j-i);
                }
            }

            
        }
    }
    answer = Math.max(answer, max)
}

console.log(answer)
// Please Write your code here.