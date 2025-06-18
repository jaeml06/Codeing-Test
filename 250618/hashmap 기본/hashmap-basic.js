const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const order = input.slice(1, n + 1).map(val => val.split(' '));

const map = new Map();

order.forEach(val => {
    if(val[0] === 'add'){
        map.set(val[1], val[2])
    }else if(val[0] === 'find'){
        const a= map.get(val[1])
        if(a){
            console.log(a)
        }else{
            console.log('None')
        }
    }else if(val[0] === 'remove'){
        map.delete(val[1])
    }
})
