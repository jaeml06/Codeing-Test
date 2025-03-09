const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const movesA = input.slice(1, 1 + n);
const movesB = input.slice(1 + n, 1 + n + m);

const posA =[];
const posB = []
movesA.forEach(val => {
    const [t, d] = val.split(' ')
    if(d === 'L'){
        for(let i = 0; i < Number(t); i++){
            posA.push(posA.length === 0 ? -1 : posA[posA.length - 1] -1)
        }
    } else {
        for(let i = 0; i < Number(t); i++){
            posA.push(posA.length === 0 ? 1 : posA[posA.length - 1] + 1)
        }
    }
})

movesB.forEach(val => {
    const [t, d] = val.split(' ')
    if(d === 'L'){
        for(let i = 0; i < Number(t); i++){
            posB.push(posB.length === 0 ? -1 : posB[posB.length - 1] -1)
        }
    } else {
        for(let i = 0; i < Number(t); i++){
            posB.push(posB.length === 0 ? 1 : posB[posB.length - 1] + 1)
        }
    }
})
let answer = 0
// console.log(posA, posB)

if(posA.length >= posB.length){
posA.forEach((val, index) => {
    if(val === posB[index > posB.length - 1 ? posB.length - 1 : index]){
        if(index === 0){

        } else if(posA[index - 1] !== posB[index > posB.length - 1 ? posB.length - 1 : index-1]){
            answer += 1
        }
    }
})
} else {
    posB.forEach((val, index) => {
    if(val === posA[index > posA.length - 1 ? posA.length - 1 : index]){
        if(index === 0){

        } else if(posB[index - 1] !== posA[index > posA.length - 1 ? posA.length - 1 : index-1]){
            answer += 1
        }
    }
})
}


console.log(answer)