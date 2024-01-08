const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let answer = ''
    for(const value of str){
        if(value === value.toUpperCase()){
            answer += value.toLowerCase();
        }else{
            answer += value.toUpperCase()
        }
    }
    console.log(answer)
});