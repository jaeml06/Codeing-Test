function solution(numbers) {
    var answer = -1;
    const arr = Array.from({length: 10}, () => false);
    numbers.forEach(value => arr[value] = true);
    answer = arr.reduce((acc, cur, index) => {
        if(cur === false){
            return acc + index;
        }
        return acc
    }, 0)
    return answer;
}