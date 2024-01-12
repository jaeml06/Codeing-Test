function solution(arr, queries) {
    let answer = [];
    queries.forEach(([s, e, k]) => {
        let temp = arr.slice(s,e+1);
        let kArray = [];
        temp.forEach((value) => {
            if(value > k){
                kArray.push(value);
            }
        });
        if(kArray.length === 0){
            answer.push(-1);
            return
        }
        answer.push(Math.min(...kArray)); 
    })
    return answer;
}