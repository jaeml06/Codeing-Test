function solution(array, n) {
    array.sort((a, b) => a- b)
    let answer = [];
    answer = array.map((value) => {
        return Math.abs(value - n);
    })
    console.log(answer)
    let index = answer.indexOf(Math.min(...answer))
    console.log(index)
    return array[index];
}