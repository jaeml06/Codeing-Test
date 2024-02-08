function solution(i, j, k) {
    var answer = 0;
    for(let count = i; count <= j; count+=1){
        [...count.toString()].forEach(value => {
            if(value === k.toString()) answer++;
        })
    }
    return answer;
}