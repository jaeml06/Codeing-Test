function solution(arr) {
    let answer = [];
    let twoIndex = []
    arr.forEach((value, index) => {
        if(value === 2){
            twoIndex.push(index)
        }
    });
    if(twoIndex.length === 0){
        return [-1]
    }
    answer = arr.slice(twoIndex[0], twoIndex[twoIndex.length-1] + 1);
    return answer;
}