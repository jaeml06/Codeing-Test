function solution(numbers) {
    let answer = '';
    const numString = [["zero", '0'], ["one", '1'], ["two", '2'], ["three", '3'], ["four", '4'], ["five", '5'], ["six", '6'], ["seven", '7'], ["eight", '8'], ["nine", '9']];
    const map = new Map(numString);
    let string = '';
    [...numbers].forEach((value) => {
        string +=value;
        if(map.has(string)){
            answer += map.get(string);
            string = '';
        }
    })
    
    return Number(answer);
}