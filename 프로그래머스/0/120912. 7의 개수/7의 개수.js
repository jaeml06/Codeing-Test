function solution(array) {
    var answer = 0;
    array.filter((value) => {
        [...value.toString()].forEach((value) => {
            if(value === '7'){
                answer += 1
            }
        })
    })
    return answer;
}