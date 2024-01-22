function solution(arr, query) {
    let answer = arr;
    query.forEach((value, index) => {
        if(index % 2 === 0){
            answer.splice(value + 1);
        }else{
            answer.splice(0, value);
        }
    })
    return answer;
}