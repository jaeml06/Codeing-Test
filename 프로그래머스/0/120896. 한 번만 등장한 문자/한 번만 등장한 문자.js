function solution(s) {
    let charCount = {};
    let answer = '';
    [...s].forEach((value) => {
        if(charCount[value]){
            charCount[value] += 1;
        } else {
            charCount[value] = 1;
        }
    })
    answer = Object.keys(charCount).filter((value) => {
        return charCount[value] === 1;
    }).sort().join('');
    return answer;
}