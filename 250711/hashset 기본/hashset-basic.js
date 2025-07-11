const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const commands = input.slice(1, 1 + n).map(line => line.split(' '));

const s = new Set();

commands.forEach(([command, val]) => {
    switch(command){
        case 'find':
            console.log(s.has(val));
            break;
        case 'add':
            s.add(val)
            break;
        case 'remove':
            s.delete(val);
    }
})