const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);
const arr = []

commands.forEach(val => {
    const [order, value] = val.split(' ')
    switch(order){
        case 'push_back':
            arr.push(value)
            break;
        case 'get':
            console.log(arr[Number(value) -1])
            break;
        case 'pop_back':
            arr.pop();
            break;
        case 'size':
            console.log(arr.length)
            break;
    }
})