function solution(numbers) {
    let answer = 0;
    numbers.sort((a, b) => a - b);
    if(numbers[0] * numbers[1] > numbers[numbers.length-1] * numbers[numbers.length-2]){
        return numbers[0] * numbers[1]
    }
    return numbers[numbers.length-1] * numbers[numbers.length-2];
}