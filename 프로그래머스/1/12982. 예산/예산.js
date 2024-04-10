function solution(d, budget) {
    var answer = 0;
    const arr = [...d];
    arr.sort((a, b) => a - b);
    let sum = 0;
    let index = 0;
    while(sum <= budget){
        sum += arr[index];
        answer++
        index++;
    }
    return answer -1;
}