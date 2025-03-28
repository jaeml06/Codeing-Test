const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));


const map = new Map();
arr.forEach(([text, count1, count2]) => {
    for(let i = 1; i <= 9; i++){
        for(let j = 1; j <= 9; j++){
            for(let k = 1; k <= 9; k++){
                if(i === j || j === k || i === k) continue;
                let temp1 = 0;
                let temp2 = 0;
                const tempArr = [...text.toString()];
                tempArr.forEach((val, index) => {
                    if(index === 0){
                        if(Number(val) === i){
                            temp1++
                        }
                    } else{
                        if(Number(val) === i){
                            temp2++
                        }
                    }
                });
                tempArr.forEach((val, index) => {
                    if(index === 1){
                        if(Number(val) === j){
                            temp1++
                        }
                    }else{
                        if(Number(val) === j){
                            temp2++
                        }
                    }
                });
                tempArr.forEach((val, index) => {
                    if(index === 2){
                        if(Number(val) === k){
                            temp1++
                        }
                    }else{
                        if(Number(val) === k){
                            temp2++
                        }
                    }
                });
                if(temp1 === count1 && temp2 === count2){
                    map.set(`${i}${j}${k}`, (map.get(`${i}${j}${k}`) ?? 0) + 1);
                }
            }
        }
    }
})
let count = 0
map.forEach((val) =>{
    if(val === n){
        count++
    }
})
console.log(count)