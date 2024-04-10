function solution(t, p) {
    let answer = 0;
    const length = p.length;
    for(let i =0; i<= t.length - length; i++){
        const str = t.substr(i, length);
        if(Number(str) <= Number(p)){
            answer++
        }
    }
    
    return answer;
}