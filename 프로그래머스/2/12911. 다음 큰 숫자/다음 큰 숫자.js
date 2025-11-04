function solution(n) {
    let answer = 0;
    for(let i = n + 1;;i++){
        if([...n.toString(2)].reduce((prev,cur) => {
            if(cur === '1'){
                return prev + 1
            }
            return prev
        }) === [...i.toString(2)].reduce((prev,cur) => {
            if(cur === '1'){
                return prev + 1
            }
            return prev
        })){
            answer = i;
            break;
        }
    }
    return answer;
}