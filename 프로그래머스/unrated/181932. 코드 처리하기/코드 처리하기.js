function solution(code) {
    let answer = '';
    let mode = 0
    const arr = code.split('');
    arr.forEach((value, index) => {
        if(mode === 0){
            if(value === '1'){
                mode = 1
                return;
            }
            if(index % 2 === 0 ){
                answer += value;
            }
        } else {
            if(value === '1'){
                mode = 0
                return;
            }
            if(index % 2 !== 0){
                answer += value;
            }
        }
    })
    if(answer === ''){
        return 'EMPTY'
    }
    return answer;
}