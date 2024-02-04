function solution(polynomial) {
    let answer = [0, 0];
    arr = polynomial.split(' ');
    arr.forEach(value => {
        if(value.includes('x')){
            if(value === 'x'){
                answer[0] += 1
            }else{
                answer[0] += Number(value.slice(0, -1));
            }
        }else if(Number.isInteger(Number(value))){
            answer[1] += Number(value);
        }
        
    })
    return `${answer[0] !== 0 ? (answer[0] === 1 ? '' : answer[0]) + 'x' : ''}${answer[0] !== 0 && answer[1] !==0 ? ' + ' : ''}${answer[1] !== 0 ? answer[1] : ''}`;
}