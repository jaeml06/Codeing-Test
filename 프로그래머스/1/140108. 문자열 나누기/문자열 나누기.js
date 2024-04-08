function solution(s) {
    let answer = 0;
    const arr = []
    const string = [...s];

    string.forEach((char, index) => {
        arr.push(char);
        const a = arr.filter(value => value === arr[0])
        const b = arr.filter(value => value !== arr[0])
        if(a.length === b.length){
            answer++;
            arr.length = 0;
        }
    })
    if(arr.length !== 0){
        answer++;
    }
    return answer;
}